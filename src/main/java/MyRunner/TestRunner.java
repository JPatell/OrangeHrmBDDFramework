package MyRunner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(
		features = "D:/Jay/QA course/Selenium_WorkSpace/OrangeHrmBDDFramework/src/main/java/Features/taggedhooks.feature", //the path of the feature files
		glue={"stepDefinitions"},
		//glue={"stepDefinitions"}, //the path of the step definition files
		plugin= {"pretty","html:test-outout", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}, //to generate different types of reporting
		monochrome = true, //display the console output in a proper readable format
		strict = true, //it will check if any step is not defined in step definition file, will fail execution if there is any steps not defined
		dryRun = false, //set to true to check the mapping is proper between feature file and step def file
		tags = {"~@SmokeTest" , "~@RegressionTest", "~@End2End"}			
		)


public class TestRunner {

}


//ORed : tags = {"@SmokeTest , @RegressionTest"} -- execute all tests tagged as @SmokeTest OR @RegressionTest
//ANDed : tags = tags = {"@SmokeTest" , "@RegressionTest"} -- execute all tests tagged as @SmokeTest AND @RegressionTest