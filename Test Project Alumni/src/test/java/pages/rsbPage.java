package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

import java.net.MalformedURLException;

public class rsbPage {
    public rsbPage() throws MalformedURLException {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "//a[@id='ib-btn']")
    public WebElement button;
//    @FindBy(xpath = "//a[@id='ib-btn']")
//    public WebElement button;
}