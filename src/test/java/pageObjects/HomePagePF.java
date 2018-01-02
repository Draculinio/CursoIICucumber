package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePagePF {
	WebDriver driver;
	
	@FindBy(name="userName")
	WebElement userField;
	
	@FindBy(name="password")
	WebElement passwordField;
	
	@FindBy(name="login")
	WebElement submitButton;
	
	
	@FindBy(linkText="REGISTER")
	WebElement registerLink;
	
	public HomePagePF(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	public void enterUserName(String username) {
		userField.sendKeys(username);
	}
	
	public void enterPassword(String password) {
		passwordField.sendKeys(password);
	}
	
	public void submitButton() {
		submitButton.click();
		
	}
	
	
	public void goToRegisterPage() {
		registerLink.click();
	}
	
}
