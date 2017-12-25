package utils;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import pageObjects.HomePage;

public class Context {
	private WebDriver driver;

	public Context() {
		/*if (System.getProperty("os.name").startsWith("Windows")) {
			System.setProperty("webdriver.chrome.driver", "Drivers/chromedriver.exe");
			
		}else {
			System.setProperty("webdriver.chrome.driver", "Drivers/chromedriver");
		}*/
		System.setProperty("webdriver.chrome.driver", "Drivers/chromedriver");
		driver = new ChromeDriver();
	}
	
	public WebDriver getDriver() {
		return driver;
	}

	public void setDriver(WebDriver driver) {
		this.driver = driver;
	}
	
	
	
	
}
