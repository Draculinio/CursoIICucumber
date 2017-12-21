package steps;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import pageObjects.HomePage;
import pageObjects.SignOnPage;
import utils.Context;
import cucumber.api.java.en.Then;

public class Tourism {
  private HomePage homePage; 
  private Context context;
  private WebDriver driver;
  
  public Tourism(Context context) {
	  this.context = context;
	  //driver= context.InitializeTest();
	  driver = context.getDriver();
	  homePage= new HomePage(driver);
  }
  
  
  
  @Given("^I enter a username (.*)")
  public void I_enter_a_username(String user) 
  {
	  homePage.enterUserName(user);
  }

  @Given("^I enter a password (.*)")
  public void I_enter_a_password(String pass) {
	  homePage.enterPassword(pass);
  }
  
  @When("^I click  Sign-In button")
  public void I_click_sign_in_button() {
	  homePage.submitButton();
  }
  
  
 

}
