package steps;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import pageObjects.SignOnPage;
import utils.Context;

public class Common {
	private Context context;
	private WebDriver driver;
	
	public Common(Context context) {
		this.context = context;
		driver= context.getDriver();
	}
	@Before
	public void InitializeTest() {
		  driver.navigate().to("http://newtours.demoaut.com/");
		  //return driver;
	}
	  
	  
	@After
	public void TearDownTest() {
		driver.close();
		driver.quit();
	}
}
