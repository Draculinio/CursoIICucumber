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

	private By flightDetailsBanner = By.xpath(
			"/html/body/div[1]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[1]/td/font/font/b/font/font");
	private By passengerCount = By.name("passCount");
	private By quantityPassangers = By.name("passCount");
	private By flightTripType = By.name("tripType");
	private By passengers = By.name("passCount");

	public ReservationPage(WebDriver driver) {
		this.driver = driver;
	}

	public void verifyreservationPage() {
		this.driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		// Assert.assertTrue(this.driver.findElement(flightDetailsBanner).getText().contains("Flight
		// Details"));
		Assert.assertTrue(driver.findElements(passengerCount).size() > 0);
	}

	public void iSelectFlightType(String flightType) {
		//ArrayList <WebElement> flightTypes = (ArrayList<WebElement>) driver.findElements(By.xpath("//input[@name='tripType']"));		
		
		
		switch (flightType.toLowerCase()) {
		case "oneway":
			
			driver.findElements(flightTripType).get(1).click();
			break;
		default:
			
			driver.findElements(flightTripType).get(0).click();
			break;
		}
		
			}

	public void iSelectQuantityPassenger(String quantityPassenger) {
		Select selectQuantity = new Select(driver.findElement(quantityPassangers));
		selectQuantity.selectByValue(quantityPassenger);
	}

	public void selectPassangerQuantity(String optionPassenger) {
		Select listCountry = new Select(driver.findElement(passengers));
		listCountry.selectByValue(optionPassenger);

	}
	
	public void selectDeparture (String optionDeparture) {
		Select selectDeparture = new Select(driver.findElement(passengers));
		selectDeparture.selectByValue(optionDeparture);

	}
}
