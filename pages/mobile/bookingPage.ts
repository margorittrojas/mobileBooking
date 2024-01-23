import Page from './page';
import commonsPage from './commonsPage';

class BookingPage extends Page {

    get close_button() { return $('//android.widget.ImageButton[@content-desc="Navigate up"]') }
    get stays_button() { return $('//android.widget.TextView[@text="Stays"]') }
    get destination_button() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.FrameLayout[1]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView[2]/android.widget.FrameLayout[1]/android.widget.LinearLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.TextView') }
    get date_button() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.FrameLayout[1]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView[2]/android.widget.FrameLayout[1]/android.widget.LinearLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.TextView') }
    get room_button() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.FrameLayout[1]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView[2]/android.widget.FrameLayout[1]/android.widget.LinearLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.LinearLayout[3]/android.widget.TextView') }
    get search_button() { return $('//android.widget.Button[@text="Search"]') }
    get destination_input() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.view.ViewGroup/android.widget.EditText') }
    get destination_option() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[1]') }
    get dias_grid() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.GridView') }
    get selectDates_button() { return $('//android.widget.Button[@text ="Select dates"]') }
    get roomAndGuests_lbl() { return $('//android.widget.TextView[@text="Select rooms and guests"]') }
    get masRoom_icon() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.view.ViewGroup[1]/android.widget.LinearLayout/android.widget.Button[2]') }
    get masAdults_icon() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.view.ViewGroup[2]/android.widget.LinearLayout/android.widget.Button[2]') }
    get masninos_icon() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.view.ViewGroup[3]/android.widget.LinearLayout/android.widget.Button[2]') }
    get ageOfChild_lbl() { return $('//android.widget.TextView[@text="Age of child"]') }
    get ok_lbl() { return $('//android.widget.Button[@text="OK"]') }
    get apply_btn() { return $('//android.widget.Button[@text="APPLY"]') }
    get short_button() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.view.ViewGroup[1]') }
    get filter_button() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.view.ViewGroup[2]') }
    get map_button() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.view.ViewGroup[3]') }
    get hotel_lbl() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.view.ViewGroup/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[4]/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView') }
    get nameHotel_lbl() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.RelativeLayout/android.widget.FrameLayout[1]/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.TextView') }
    get infoHabGuests_lbl() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.RelativeLayout/android.widget.FrameLayout[1]/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout[3]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[1]') }
    get precio_lbl() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.RelativeLayout/android.widget.FrameLayout[1]/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout[3]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView') }
    get taxes_lbl() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.RelativeLayout/android.widget.FrameLayout[1]/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout[3]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[2]') }
    get checkIn_lbl() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.RelativeLayout/android.widget.FrameLayout[1]/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout[4]/android.view.ViewGroup/android.widget.TextView[3]') }
    get checkOut_lbl() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.RelativeLayout/android.widget.FrameLayout[1]/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout[4]/android.view.ViewGroup/android.widget.TextView[4]') }
    get reserveTheseOption_btn() { return $('//android.widget.Button[@text="Reserve these options"]') }
    get primerNombre() { return $('//android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[1]') }
    get validateMessDestination_lbl() { return $('//android.widget.TextView[@text="Please enter your destination"]') }
    get validateMessCantMatch_lbl() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.widget.TextView') }
    //get() { return $('') }
    get sortby_lbl() { return $('//android.widget.TextView[@text="Sort by"]') }
    get tapfirstHotel() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.view.ViewGroup/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[3]') }
    get select_btn() { return $('//android.widget.TextView[@text="SELECT"]') }
    get price_lbl() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.RelativeLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.TextView[1]') }
    get taxePrice_lbl() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.RelativeLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.TextView[2]') }
    get reserve_btn() { return $('//android.widget.Button[@text="Reserve"]') }
    get() { return $('') }
    

    async validate(): Promise<void> {
        console.log("Validate Home");
        await expect(this.stays_button).toBePresent();
        await expect(this.destination_button).toBePresent();
        await expect(this.date_button).toBePresent();
        await expect(this.room_button).toBePresent();
        await expect(this.search_button).toBePresent();
    }
    async closeFirstWin(): Promise<void> {
        console.log("Tap To close first win");
        await expect(this.close_button).toBePresent();
        await this.close_button.click();
    }
    async tapDestination(destination: string): Promise<void> {
        await driver.pause(2000);
        await this.destination_button.click();
        await driver.pause(2000);
        console.log("Input destination: " + destination);
        await this.destination_input.addValue(destination);
        await driver.pause(2000);
        await this.destination_option.click();
    }
    async tapReservationDate(fistDate: string, lastDate: string): Promise<void> {
        //await driver.execute('mobile: scroll', {direction: 'down'});
        await this.dias_grid.click();
        await driver.pause(2000);
        await commonsPage.scrollView();
        await driver.pause(2000);
        console.log("Tap origin fist date");
        const elementFirstdate = $('//android.view.View[@content-desc="' + fistDate + '"]')
        await (await elementFirstdate).click();
        const elementLastdate = $('//android.view.View[@content-desc="' + lastDate + '"]')
        await (await elementLastdate).click();
        await this.selectDates_button.click();
    }
    async tapRooms(nRooms: string): Promise<void> {
        await expect(this.room_button).toBePresent();
        await this.room_button.click();
        await expect(this.roomAndGuests_lbl).toBePresent();
        switch (nRooms) {
            case "1": {
                break;
            }

            case "2": {
                await this.masRoom_icon.click();
                break;
            }

            case "3": {
                await this.masRoom_icon.click();
                await this.masRoom_icon.click();
                break;
            }

            case "4": {
                await this.masRoom_icon.click();
                await this.masRoom_icon.click();
                await this.masRoom_icon.click();
                break;
            }

            case "5": {
                await this.masRoom_icon.click();
                await this.masRoom_icon.click();
                await this.masRoom_icon.click();
                await this.masRoom_icon.click();
                break;
            }

            default: {
                break;
            }
        }
    }
    async tapAdults(nadults: string): Promise<void> {
        switch (nadults) {
            case "1": {
                console.log("Números de habitaciones igual al número de adultos");
                break;
            }

            case "2": {
                console.log("Se agrega un adulto mas al numero de habitaciones");
                await this.masAdults_icon.click();
                break;
            }

            case "3": {
                console.log("Se agregan dos adultos mas al numero de habitaciones");
                await this.masAdults_icon.click();
                await this.masAdults_icon.click();
                break;
            }

            case "4": {
                console.log("Se agregan tres adultos mas al numero de habitaciones");
                await this.masAdults_icon.click();
                await this.masAdults_icon.click();
                await this.masAdults_icon.click();
                break;
            }

            default: {
                break;
            }
        }
    }
    async tapChildren(nchildren: string): Promise<void> {
        switch (nchildren) {
            case "0": {
                console.log("Sin niños");
                break;
            }

            case "1": {
                await this.masninos_icon.click();
                await expect(this.ageOfChild_lbl).toBePresent();
                await driver.pause(2000);
                await commonsPage.scrollView();
                await driver.pause(2000);
                await this.ok_lbl.click();
                break;
            }

            case "2": {
                await this.masninos_icon.click();
                await expect(this.ageOfChild_lbl).toBePresent();
                await driver.pause(2000);
                await commonsPage.scrollView();
                await driver.pause(2000);
                await this.ok_lbl.click();
                await driver.pause(2000);
                await this.masninos_icon.click();
                await expect(this.ageOfChild_lbl).toBePresent();
                await driver.pause(2000);
                await commonsPage.scrollView();
                await driver.pause(2000);
                await this.ok_lbl.click();
                break;
            }

            default: {
                break;
            }
        }
        await this.apply_btn.click();
    }
    async tapSearch(): Promise<void> {
        console.log("Tap search");
        await expect(this.search_button).toBePresent();
        await this.search_button.click();
    }
    async tapHotel(): Promise<void> {
        console.log("Tap hotel");
        await driver.pause(2000);
        await expect(this.short_button).toBePresent();
        await expect(this.filter_button).toBePresent();
        await expect(this.map_button).toBePresent();
        await driver.pause(2000);
        await this.hotel_lbl.click();
        await driver.pause(2000);
        await expect(this.nameHotel_lbl).toBePresent();
        await expect(this.infoHabGuests_lbl).toBePresent();
        await expect(this.precio_lbl).toBePresent();
        await expect(this.taxes_lbl).toBePresent();
        await expect(this.checkIn_lbl).toBePresent();
        await expect(this.checkOut_lbl).toBePresent();
        await this.infoHabGuests_lbl.click();
    }
    async tapReserveTheseOption(): Promise<void> {
        console.log("Reserve");
        await driver.pause(2000);
        await this.reserveTheseOption_btn.click();
        await driver.pause(3000);
        await driver.pause(3000);
        //await this.primerNombre.click();
        //await driver.pause(3000);
       
    }
    async validateMessDestination(): Promise<void> {
        console.log("Validate Destination");
        await driver.pause(2000);
        await expect(this.validateMessDestination_lbl).toBePresent();
       
    }
    async tapDestinationNotExist(destination: string): Promise<void> {
        console.log("Destination No Exist");
        await driver.pause(2000);
        await this.destination_button.click();
        await driver.pause(2000);
        console.log("Input destination: " + destination);
        await this.destination_input.addValue(destination);     
    }
    async validateMessCantMatch(): Promise<void> {
        console.log("Validate Destination");
        await driver.pause(2000);
        await expect(this.validateMessCantMatch_lbl).toBePresent();
       
    }
    async tapSortBy(sortBy: string): Promise<void> {
        console.log("Tap sort by");
        await driver.pause(2000);
        await expect(this.short_button).toBePresent();
        await expect(this.filter_button).toBePresent();
        await expect(this.map_button).toBePresent();
        await this.short_button.click();
        await expect(this.sortby_lbl).toBePresent();
        console.log("Tap option");
        //android.widget.CheckedTextView[@text="Stars (5 to 0)"]
        const elementFirstdate = $('//android.widget.CheckedTextView[@text="' + sortBy + '"]')
        await (await elementFirstdate).click();
        await driver.pause(3000);
        await expect(this.short_button).toBePresent();
        await this.tapfirstHotel.click();
        await driver.pause(2000);
        await expect(this.nameHotel_lbl).toBePresent();
        await expect(this.infoHabGuests_lbl).toBePresent();
        await expect(this.precio_lbl).toBePresent();
        await expect(this.taxes_lbl).toBePresent();
        await expect(this.checkIn_lbl).toBePresent();
        await expect(this.checkOut_lbl).toBePresent();
        await this.infoHabGuests_lbl.click();
    }
    async tapSelectOption(): Promise<void> {
        console.log("Reserve");
        await driver.pause(2000);
        await this.select_btn.click();
        await driver.pause(3000);
    }
    async tapReserve(): Promise<void> {
        console.log("Reserve");
        await driver.pause(2000);
        await expect(this.price_lbl).toBePresent();
        await expect(this.taxePrice_lbl).toBePresent();
        await expect(this.reserve_btn).toBePresent();
        await this.reserve_btn.click();
        await driver.pause(2000);
       
    }
    
    







}

export default new BookingPage();

