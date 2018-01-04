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
		homePage.submitButton();
	}

	@Given("^I select Flight type (.*)")
	public void i_select_Flight_type(String flightType) throws Throwable {
		reserve.iSelectFlightType(flightType);
	}

	@Given("^I select quantity of passengers (.*)")
	public void i_select_quantity_of_passengers(int optionPassenger) throws Throwable {
		reserve.iSelectQuantityPassenger(optionPassenger);
	}

	@Given("^I select departure from: (.*) on date (.*), (\\d+)$")
	public void i_select_departure_from_month_and_day(String departureDestination, String departureMonth, int departureDay) throws Throwable {
		reserve.iSelectDepartureDestination(departureDestination);
		reserve.iSelectDepartureMonth(departureMonth);
		reserve.iSelectDepartureDay(departureDay);
	}

	@Given("^I select arrival to: (.*) returning on date (.*), (\\d+)$")
	public void i_select_arrival_to_month_and_day(String arrivalDestination, String arrivalMonth, int arrivalDay) throws Throwable {
		reserve.iSelectArrivalDestination(arrivalDestination);
		reserve.iSelectArrivalMonth(arrivalMonth);
		reserve.iSelectArrivalDay(arrivalDay);
		
		
	}

	@Given("^I select Service class (.*)$")
	public void i_select_Service_class(String serviceClass) throws Throwable {
		reserve.iSelectServiceClass(serviceClass);
		
	}

	@Given("^I select airline (.*)$")
	public void i_select_airline(String airline) throws Throwable {
		reserve.iSelectAirline(airline);
	}
}
