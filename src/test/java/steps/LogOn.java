package steps;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Then;
import pageObjects.ReservationPage;
import pageObjects.SignOnPage;
import utils.Context;

public class LogOn {
	private Context context;
	private WebDriver driver;
	private SignOnPage signOnPage;
	private ReservationPage reservationPage;
	
	public LogOn(Context context) {
		this.context = context;
		driver= context.getDriver();
	}
	
	@Then("^login result must be (.*)")
	  public void login_results_must_be(String result) {
		
		if(result.toUpperCase()=="BADLOGIN") {
			signOnPage = new SignOnPage(driver);
			signOnPage.verifyInPage();
		}else {
			reservationPage = new ReservationPage(driver);
			reservationPage.verifyreservationPage();
		}
	  }
}
