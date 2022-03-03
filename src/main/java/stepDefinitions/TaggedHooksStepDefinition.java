package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TaggedHooksStepDefinition {
	
	WebDriver driver;
	
	@Before(order=0)
	public void setUP(){
		 System.setProperty("webdriver.gecko.driver", "D:/Jay/QA course/SeleniumJars/geckodriver.exe");
		 driver = new FirefoxDriver();
	}

	@After(order=0)
	public void tearDown(){
		System.out.println("close the browser");
		driver.quit();
	}
	
//	@Before(order=1)
//	public void setUP1(){
//		System.out.println("launch FF");
//		System.out.println("Enter URL for Free CRM APP");
//	}
//
//	@After(order=1)
//	public void tearDown1(){
//		System.out.println("close the browser");
//	}
	
	@Before("@First")
	public void beforeFirst(){
		System.out.println("before only first scenario");
	}
	
	@After("@First")
	public void afterFirst(){
		System.out.println("after only first sceanrio");
	}
	
	@Before("@Second")
	public void beforeSecond(){
		System.out.println("before only second scenario");
	}
	
	@After("@Second")
	public void afterSecond(){
		System.out.println("after only second sceanrio");
	}
//	
//	@Before("@Third")
//	public void beforeThird(){
//		System.out.println("before only third scenario");
//	}
//	
//	@After("@Third")
//	public void afterThird(){
//		System.out.println("after only third sceanrio");
//	}
	
	
	 @Given("^user is already on Login Page$")
	 public void user_already_on_login_page(){
	 driver.get("https://opensource-demo.orangehrmlive.com/");
	 }

	 @When("^title of login page is OrangeHRM$")
	 public void title_of_login_page_is_OrangeHRM() {
	 String title = driver.getTitle();
	 System.out.println(title);
	 Assert.assertEquals("OrangeHRM", title);
	 }

	 @Then("^user enters \"(.*)\" and \"(.*)\"$")
	 public void user_enters_username_and_password(String username, String password){
	 driver.findElement(By.name("txtUsername")).sendKeys(username);
	 driver.findElement(By.name("txtPassword")).sendKeys(password);
	 }
	 
	 @Then("^user clicks on login button$")
	 public void user_clicks_on_login_button() {
	 driver.findElement(By.xpath("//input[@id='btnLogin']")).click();
	 }
	 
	 @Then("^user is on home page$")
	 public void user_is_on_home_page(){
	 String title = driver.getTitle();
	 System.out.println("Home Page title ::"+ title);
	 Assert.assertEquals("OrangeHRM", title);
	 }
	
	 @Then("^user moves to candidates page$")
	 public void user_moves_to_candidates_page() {
		driver.findElement(By.id("menu_recruitment_viewRecruitmentModule")).click();
		
		}
	
	 @Then("^user moves to new candidate page$")
	 public void user_moves_to_new_candidates_page() {
		driver.findElement(By.id("btnAdd")).click();
		
		}
	 
	 @Then("^user enters contact details \"(.*)\" and \"(.*)\" and \"(.*)\"$")
	 public void user_enters_contacts_details(String firstname, String lastname, String email){
		 driver.findElement(By.id("addCandidate_firstName")).sendKeys(firstname);
		 driver.findElement(By.id("addCandidate_lastName")).sendKeys(lastname);
		 driver.findElement(By.id("addCandidate_email")).sendKeys(email);
		 driver.findElement(By.id("btnSave")).click();
	 }
	

}

