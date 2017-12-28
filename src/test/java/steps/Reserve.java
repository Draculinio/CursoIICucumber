package steps;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.HomePage;
import pageObjects.RegisterPage;
import pageObjects.ReservationPage;
import utils.Context;

public class Reserve {
	
	private HomePage homePage;
	private ReservationPage reserve;
	private Context context;
	private WebDriver driver;

	public Reserve(Context context) {

		this.context = context;
		driver = context.getDriver();
		homePage = new HomePage(driver);
		reserve = new ReservationPage(driver);
	}
	
	@Given("^I log in with mercury and mercury$")
	public void i_log_in_with_mercury_and_mercury() throws Throwable {
		homePage.enterUserName("mercury");
		homePage.enterPassword("mercury");
	}

	@Given("^I select Flight type (.*)")
	public void i_select_Flight_type(String flightType) throws Throwable {
		reserve.iSelectFlightType(flightType);
	}

	@Given("^I select quantity of passengers (.*)")
	public void i_select_quantity_of_passengers(int arg1) throws Throwable {
		
		
	}

	@Given("^I select departure from: <departuring> on date May, (\\d+)$")
	public void i_select_departure_from_departuring_on_date_May(int arg1) throws Throwable {
		
		
	}

	@Given("^I select arrival to: Frankfurt returning on date February, (\\d+)$")
	public void i_select_arrival_to_Frankfurt_returning_on_date_February(int arg1) throws Throwable {
		
		
	}

	@Given("^I select Service class First class$")
	public void i_select_Service_class_First_class() throws Throwable {
		
		
	}

	@Given("^I select airline Unified Airlines$")
	public void i_select_airline_Unified_Airlines() throws Throwable {
		
		
	}
}
