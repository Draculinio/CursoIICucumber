package pageObjects;

import java.util.ArrayList;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import org.openqa.selenium.support.PageFactory;

public class ReservationPage {

	private WebDriver driver;
	private static String roundtrip = "//input[@value='roundtrip']";
	private static String oneway = "//input[@value='oneway']";

	private By flightDetailsBannerLocator = By.xpath(
			"/html/body/div[1]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[1]/td/font/font/b/font/font");
	private By passengerCountLocator = By.name("passCount");
	private By quantityPassangersLocator = By.name("passCount");
	private By flightTripTypeLocator = By.name("tripType");
	private By passengersLocator = By.name("passCount");

	public By departureDestinationLocator = By.name("fromPort");
	public By departureMonthLocator = By.name("fromMonth");
	public By departureDayLocator = By.name("fromDay");
	
	public By arrivalDestinationLocator = By.name("toPort");
	public By arrivalMonthLocator = By.name("toMonth");
	public By arrivalDayLocator = By.name("toDay");
	
	public By airlineSelectLocator = By.name("airline");

	public ReservationPage(WebDriver driver) {
		this.driver = driver;
	}

	public void verifyreservationPage() {
		this.driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		// Assert.assertTrue(this.driver.findElement(flightDetailsBanner).getText().contains("Flight
		// Details"));
		Assert.assertTrue(driver.findElements(passengerCountLocator).size() > 0);
	}

	public void iSelectFlightType(String flightType) {
		// ArrayList <WebElement> flightTypes = (ArrayList<WebElement>)
		// driver.findElements(By.xpath("//input[@name='tripType']"));

		switch (flightType.toLowerCase()) {
		case "oneway":

			driver.findElements(flightTripTypeLocator).get(1).click();
			break;
		default:

			driver.findElements(flightTripTypeLocator).get(0).click();
			break;
		}

	}

	// wrappers for selection
	private void SelectByValue(By locator, String value) {
		Select select = new Select(driver.findElement(locator));
		select.selectByValue(value);
	}

	private void SelectByVisibleText(By locator, String text) {
		Select select = new Select(driver.findElement(locator));
		select.selectByVisibleText(text);
	}

	public void iSelectQuantityPassenger(String quantityPassenger) {
		Select selectQuantity = new Select(driver.findElement(quantityPassangersLocator));
		selectQuantity.selectByValue(quantityPassenger);
	}

	// override for ints
	public void iSelectQuantityPassenger(int optionPassenger) {
		iSelectQuantityPassenger(Integer.toString(optionPassenger));
	}

	public void iSelectDepartureDestination(String optionDepartureDest) {
		SelectByValue(departureDestinationLocator, optionDepartureDest);
	}

	public void iSelectDepartureMonth(String departureMonth) {
		SelectByVisibleText(departureMonthLocator, departureMonth);
	}

	public void iSelectDepartureDay(String departureDay) {
		SelectByValue(departureDayLocator, departureDay);
	}

	public void iSelectDepartureDay(int departureDay) {
		SelectByValue(departureDayLocator, Integer.toString(departureDay));
	}

	public void iSelectArrivalDestination(String optionArrivalDest) {
		SelectByVisibleText(arrivalDestinationLocator, optionArrivalDest);
	}
	
	public void iSelectArrivalMonth(String arrivalMonth) {
		SelectByVisibleText(arrivalMonthLocator, arrivalMonth);
	}
	
	public void iSelectArrivalDay(String arrivalDay) {
		SelectByValue(arrivalDayLocator, arrivalDay);
	}

	public void iSelectArrivalDay(int arrivalDay) {
		SelectByValue(arrivalDayLocator, Integer.toString(arrivalDay));
	}

	public void iSelectServiceClass(String serviceClass) throws Exception {
		// element <input checked="" name="servClass" type="radio" value= XXX >
		// class 			| value
		// Economy class 	> "Coach"
		// Business class 	> "Business"
		// First class 		> "First"
		
		switch (serviceClass) {
			case "Economy class": //value = Coach
				driver.findElement(By.xpath("//input[@name='servClass'][@value='Coach']"));
			break;

			case "Business class": //value = Business
				driver.findElement(By.xpath("//input[@name='servClass'][@value='Business']"));
			break;
			
			case "First class": //value = First
				driver.findElement(By.xpath("//input[@name='servClass'][@value='First']")).click();
			break;
			
			default:
				throw new Exception("Value "+serviceClass+" not a valid option for service class (Economy class/Business class/First class)");
		}
	}

	public void iSelectAirline(String airline) {
		SelectByVisibleText(airlineSelectLocator, airline);
	}
	
	
	
}
