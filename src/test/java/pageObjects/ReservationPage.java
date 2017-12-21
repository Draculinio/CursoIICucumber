package pageObjects;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

public class ReservationPage {
	
	private WebDriver driver;
	private By flightDetailsBanner = By.xpath("/html/body/div[1]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[1]/td/font/font/b/font/font");
	private By passengerCount = By.name("passCount");
    public ReservationPage(WebDriver driver) {
		this.driver = driver;
	}
    
    public void verifyreservationPage() {
    	this.driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    	//Assert.assertTrue(this.driver.findElement(flightDetailsBanner).getText().contains("Flight Details"));
    	Assert.assertTrue(driver.findElements(passengerCount).size()>0);
    }
}
