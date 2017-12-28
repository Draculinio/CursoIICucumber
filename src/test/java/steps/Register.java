package steps;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.HomePage;
import pageObjects.RegisterPage;
import utils.Context;

public class Register {

	private HomePage homePage;
	private RegisterPage register;
	private Context context;
	private WebDriver driver;

	public Register(Context context) {

		this.context = context;
		driver = context.getDriver();
		homePage = new HomePage(driver);
		register = new RegisterPage(driver);
	}

	@Given("^click the REGISTER button$")
	public void click_the_REGISTER_button() throws Throwable {
		homePage.goToRegisterPage();
	}

	@Given("^I enter a firstname (.*)")
	public void i_enter_a_firstname (String firstName) throws Throwable {
	   register.enterFirsName(firstName);
	}

	@Given("^I enter a lastname (.*)")
	public void i_enter_a_lastname (String lastName) throws Throwable {
		register.enterLastName(lastName);
	}

	@Given("^I enter a phone (.*)")
	public void i_enter_a_phone(String phone) throws Throwable {
		register.enterPhone(phone);

	}

	@Given("^I enter a email (.*)")
	public void i_enter_a_email(String email) throws Throwable {
		register.enterEmail(email);

	}

	@Given("^I enter a adress(\\d+) Abalbin(\\d+)$")
	public void i_enter_a_adress_Abalbin(int arg1, int arg2) throws Throwable {

	}

	@Given("^I enter a adress(\\d+) balbin(\\d+)$")
	public void i_enter_a_adress_balbin(int arg1, int arg2) throws Throwable {

	}

	@Given("^I enter a city BsAs$")
	public void i_enter_a_city_BsAs() throws Throwable {

	}

	@Given("^I enter a state BsAs$")
	public void i_enter_a_state_BsAs() throws Throwable {

	}

	@Given("^I enter a postalCode (\\d+)$")
	public void i_enter_a_postalCode(int arg1) throws Throwable {

	}

	@Given("^I enter a country ARGENTINA$")
	public void i_enter_a_country_ARGENTINA() throws Throwable {

	}

	@Given("^I enter a user pepe$")
	public void i_enter_a_user_pepe() throws Throwable {

	}

	@Given("^I enter a cPassword peperoni$")
	public void i_enter_a_cPassword_peperoni() throws Throwable {

	}

	@When("^I click SUBMIT button$")
	public void i_click_SUBMIT_button() throws Throwable {

	}

	@Then("^register result must be succes$")
	public void register_result_must_be_succes() throws Throwable {

	}
}
