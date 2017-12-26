package utils;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Context {
	private WebDriver driver;

	/*public Context() {
		System.setProperty("webdriver.chrome.driver", "Drivers/chromedriver.exe");
	}*/
	
	public void initializeDriver() {
		System.setProperty("webdriver.chrome.driver", "Drivers/chromedriver.exe");
		driver = new ChromeDriver();
	}
	
	public WebDriver getDriver() {
		return driver;
	}

	public void setDriver(WebDriver driver) {
		this.driver = driver;
	}
	
	
	
	
}
