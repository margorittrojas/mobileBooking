import { Given, When, Then } from "@cucumber/cucumber";
import BookingPage from "../../pages/mobile/bookingPage";

//------------------------------

Given(/^I enter the Booking application$/, async () => {
  await BookingPage.closeFirstWin();
  await BookingPage.validate();
});
When(/^I enter the destination \"([^\"]*)\" and reservation date \"([^\"]*)\" and \"([^\"]*)\"$/, async (destination: string, fistDate: string, lastDate: string) => {
  await BookingPage.tapDestination(destination);
  await BookingPage.tapReservationDate(fistDate, lastDate);
});
Then(/^I enter the number of rooms \"([^\"]*)\" adults \"([^\"]*)\" and children \"([^\"]*)\"$/, async (nRooms: string, nadults: string, nchildren: string) => {
  await BookingPage.tapRooms(nRooms);
  await BookingPage.tapAdults(nadults);
  await BookingPage.tapChildren(nchildren);
});
Then(/^I tap the search button$/, async () => {
  await BookingPage.tapSearch();
});
Then(/^I select the hotel$/, async () => {
  await BookingPage.tapHotel();
  await BookingPage.tapReserveTheseOption();
});
Then(/^I validate the message please enter your destination$/, async () => {
  await BookingPage.validateMessDestination();
});
When(/^I enter a destination that does not exist \"([^\"]*)\"$/, async (destination: string) => {
  await BookingPage.tapDestinationNotExist(destination);
});
Then(/^I validate the message Sorry but we cant find anything that matches your search$/, async () => {
  await BookingPage.validateMessCantMatch();
});
Then(/^I select the sort button and sort by \"([^\"]*)\"$/, async (sortBy: string) => {
  await BookingPage.tapSortBy(sortBy);
  await BookingPage.tapSelectOption();
  await BookingPage.tapReserve();
});
