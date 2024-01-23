@run @mobile @hotelReservation
Feature: Hotel reservation - App Booking Android

  @reservation
  Scenario Outline: As booking user, I select a destination and reserve a hotel
    Given I enter the Booking application
    When I enter the destination "<destination>" and reservation date "<fistDate>" and "<lastDate>"
    And I enter the number of rooms "<nRooms>" adults "<nadults>" and children "<nchildren>"
    And I tap the search button
    Then I select the hotel
   
    Examples: 
      | destination | fistDate        | lastDate        | nRooms | nadults | nchildren | 
      | cusco       | 14 March 2024   | 16 March 2024   | 1      | 1       | 1         |

@reservationNoDesti
  Scenario Outline: As booking user, I want a hotel but the destination is not selected
    Given I enter the Booking application
    When I tap the search button
    Then I validate the message please enter your destination

@reservationNoExistDesti
  Scenario Outline: As booking user, I want a hotel but I select a destination that does not exist
    Given I enter the Booking application
    When I enter a destination that does not exist "<destination>"
    Then I validate the message Sorry but we cant find anything that matches your search

     Examples: 
      | destination|
      | 34567sd    |

  @reservationSort
  Scenario Outline: As booking user, I select a hotel but select the sort by button
    Given I enter the Booking application
    When I enter the destination "<destination>" and reservation date "<fistDate>" and "<lastDate>"
    And I enter the number of rooms "<nRooms>" adults "<nadults>" and children "<nchildren>"
    And I tap the search button
    Then I select the sort button and sort by "<sortBy>"

     Examples: 
      | destination | fistDate        | lastDate        | nRooms | nadults | nchildren | sortBy          |
      | cusco       | 14 March 2024   | 16 March 2024   | 1      | 1       | 1         | 	Stars (5 to 0) |      
