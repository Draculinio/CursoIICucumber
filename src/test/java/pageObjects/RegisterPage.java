package pageObjects;

import java.util.Iterator;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Select;

public class RegisterPage {

	private WebDriver driver;

	private By firstNameLocator = By.name("firstName");
	private By lastNameLocator = By.name("lastName");
	private By phoneLocator = By.name("phone");
	private By address1Locator = By.name("address1");
	private By address2Locator = By.name("address2");
	private By cityLocator = By.name("city");
	private By stateLocator = By.name("state");
	private By postalCodeLocator = By.name("postalCode");
	private By countryLocator = By.name("country");
	private By userNameLocator = By.id("email");
	private By passwordLocator = By.name("password");
	private By confirmPasswordLocator = By.name("confirmPassword	");
	private By emailLocator = By.name("userName");
	
	public RegisterPage(WebDriver driver) {
		this.driver = driver;
	}

	public void enterFirsName(String name) {
		driver.findElement(firstNameLocator).sendKeys(name);
	}

	public void enterLastName(String last) {
		driver.findElement(lastNameLocator).sendKeys(last);
	}

	public void enterPhone(String phone) {
		driver.findElement(phoneLocator).sendKeys(phone);
	}

	public void enterAddress1(String address1) {
		driver.findElement(address1Locator).sendKeys(address1);
	}

	public void enterAddress2(String address2) {
		driver.findElement(address2Locator).sendKeys(address2);
	}

	public void enterCity(String city) {
		driver.findElement(cityLocator).sendKeys(city);
	}

	public void enterState(String state) {
		driver.findElement(stateLocator).sendKeys(state);
	}

	public void enterPostalCode(String postalcode) {
		driver.findElement(postalCodeLocator).sendKeys(postalcode);
	}

	public void enterCountry(String country) {
		Select listCountry = new Select(driver.findElement(countryLocator));
	}

	public void enterUsername(String userName) {
		driver.findElement(userNameLocator).sendKeys(userName);
	}

	public void enterPassword(String password) {
		driver.findElement(passwordLocator).sendKeys(password);
	}

	public void enterConfirmPassword(String confirmPassword) {
		driver.findElement(confirmPasswordLocator).sendKeys(confirmPassword);
	}
	
	public void enterEmail (String email) {
		driver.findElement(emailLocator).sendKeys(email);
	}
}
