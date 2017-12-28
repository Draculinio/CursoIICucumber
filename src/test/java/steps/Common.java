package steps;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import utils.Context;

public class Common {
	private Context context;
	
	public Common(Context context) {
		this.context = context;
	}
	
	@Before
	public void InitializeTest() {
		  //driver.navigate().to("http://newtours.demoaut.com/");
		this.context.initializeDriver();
		this.context.getDriver().navigate().to("http://newtours.demoaut.com/");
		
	}
	  
	  
	@After
	public void TearDownTest() {
		this.context.getDriver().close();
		this.context.getDriver().quit();
	}
}
