console.log(`
████████╗██╗  ██╗███████╗     ██████╗██████╗ ██╗███╗   ███╗███████╗
╚══██╔══╝██║  ██║██╔════╝    ██╔════╝██╔══██╗██║████╗ ████║██╔════╝
   ██║   ███████║█████╗      ██║     ██████╔╝██║██╔████╔██║███████╗
   ██║   ██╔══██║██╔══╝      ██║     ██╔══██╗██║██║╚██╔╝██║╚════██║
   ██║   ██║  ██║███████╗    ╚██████╗██║  ██║██║██║ ╚═╝ ██║███████║
   ╚═╝   ╚═╝  ╚═╝╚══════╝     ╚═════╝╚═╝  ╚═╝╚═╝╚═╝     ╚═╝╚══════╝

██╗████████╗ █████╗ ██╗     ██╗ █████╗ ███╗   ██╗    ██████╗  ██████╗ ████████╗
██║╚══██╔══╝██╔══██╗██║     ██║██╔══██╗████╗  ██║    ██╔══██╗██╔═══██╗╚══██╔══╝
██║   ██║   ███████║██║     ██║███████║██╔██╗ ██║    ██████╔╝██║   ██║   ██║
██║   ██║   ██╔══██║██║     ██║██╔══██║██║╚██╗██║    ██╔══██╗██║   ██║   ██║
██║   ██║   ██║  ██║███████╗██║██║  ██║██║ ╚████║    ██████╔╝╚██████╔╝   ██║
╚═╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝    ╚═════╝  ╚═════╝    ╚═╝
`)


class Utils {
    static cashFormatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
}

class Urls {
    static ROBBERY_GANG_ACCEPT_URL = "https://www.thecrims.com/api/v1/gangrobbery/accept";
    static ROBBERY_GANG_EXECUTE_URL = "https://www.thecrims.com/api/v1/gangrobbery/execute";
    static SINGLE_ATTACK_URL = "https://www.thecrims.com/api/v1/attack";
    static NIGHTCLUB_ENTER_URL = "https://www.thecrims.com/api/v1/nightclub";
    static NIGHTCLUBS_PAGE_URL = "https://www.thecrims.com/api/v1/nightclubs";
    static NIGHTCLUB_DRUG_URL = "https://www.thecrims.com/api/v1/nightclub/drug";
    static NIGHTCLUB_EXIT_URL = "https://www.thecrims.com/api/v1/nightclub/exit";
    static DETOX_URL = "https://www.thecrims.com/api/v1/hospital/detox";
    static REQUEST_ID_URL = "https://www.thecrims.com/user/";
    static ROBBERY_SINGLE_URL = "https://www.thecrims.com/api/v1/rob";
    static ROBBERIES_URL = "https://www.thecrims.com/api/v1/robberies";
    static TRAINING_URL = "https://www.thecrims.com/api/v1/training";
    static HEALINGS_URL = "https://www.thecrims.com/api/v1/hospital/healing";
    static ASSAULT_GANG_URL = "https://www.thecrims.com/api/v1/assault";
    static HOOKERS_URL = "https://www.thecrims.com/api/v1/hookers";
    static WEAPONS_URL = "https://www.thecrims.com/api/v1/market/weapons";
    static ARMORS_URL = "https://www.thecrims.com/api/v1/market/armors";
    static GUARDS_URL = "https://www.thecrims.com/api/v1/market/guards";
    static STATE_URL = "https://www.thecrims.com/api/v1/state";
    static ITEMS_URL = "https://www.thecrims.com/api/v1/market/items";
    static PRISON_URL = "https://www.thecrims.com/api/v1/prison";
    static VISITORS_URL = "https://www.thecrims.com/api/v1/nightclub/visitors";
}


const UserActions = Object.freeze({
    SINGLE_ROBBERY: "SINGLE_ROBBERY",
    SINGLE_ROBBERY_SPECIFIC_ROB: "SINGLE_ROBBERY_SPECIFIC_ROB",
    GANG_ROBBERY: "GANG_ROBBERY",
    TRAINING: "TRAINING",
    RECHARGE_ONLY: "RECHARGE_ONLY",
    HUNTING: "HUNTING",
    HUNTING_REMAINING_IN_RAVE: "HUNTING_REMAINING_IN_RAVE",

});

class Logger {

    #TAG = null;
    constructor(pTag) {
        this.#TAG = pTag;
    }

    getCurrentDateTimeWithMilliseconds() {
        const now = new Date();
        return `${now.toLocaleString()} ${now.getMilliseconds()}`;
    }

    log(pMessage) {
        if(typeof pMessage === 'string') {
            console.log(`${this.getCurrentDateTimeWithMilliseconds()} ${this.#TAG ? this.#TAG + ': ' + pMessage : pMessage}`);
        }
        else {
            console.log(pMessage);
        }
    }

    logImportant(pMessage){
        if(typeof pMessage === 'string') {
            console.log(`%c${this.getCurrentDateTimeWithMilliseconds()} ${this.#TAG ? this.#TAG + ': ' + pMessage : pMessage}`, 'background: #222; color: #bada55');
        }
        else {
            console.log(pMessage);
        }
    }

    logSuccess(pMessage) {
        if(typeof pMessage === 'string') {
            console.log(`%c${this.getCurrentDateTimeWithMilliseconds()} ${this.#TAG ? this.#TAG + ': ' + pMessage : pMessage}`, 'background: #03fc28; color: #000000');
        }
        else {
            console.log(pMessage);
        }
    }
}



class RandomNumberGenerator {

    static getFloatRandomNumberBetween(pMin, pMax) {
        return Math.random() * (pMax - pMin) + pMin;
    }

    static getIntegerRandomNumberBetween(pMin, pMax) {
        return Math.floor(Math.random() * (pMax - pMin + 1) + pMin);
    }
}

class PageNavigator {

    #logger = null;

    constructor() {
        this.#logger = new Logger("[PageNavigator]");
    }

    #MENU_MAP = Object.freeze({
        ASSAULT: 'menu-assault',
        ROBBERY: 'menu-robbery',
        NIGHTLIFE: 'menu-nightlife',
        ARMSDEALER: 'menu-armsdealer',
        BUILDINGS: 'menu-buildings',
        HOSPITAL: 'menu-hospital',
        TRAINING: 'menu-training',
    });

    navigateToRandomPage() {
        let menuMapClone = JSON.parse(JSON.stringify(this.#MENU_MAP));
        // Remove ROBBERY and NIGHTLIFE
        delete menuMapClone.ROBBERY;
        delete menuMapClone.NIGHTLIFE;
        const menuMapCloneLength = Object.keys(menuMapClone).length;
        const randomIndex = RandomNumberGenerator.getIntegerRandomNumberBetween(0, menuMapCloneLength-1);
        const randomKeyOfMenuMap = Object.keys(menuMapClone)[randomIndex];
        this.#logger.log(`Navigating to a Random Page... (${menuMapClone[randomKeyOfMenuMap]})`);
        $(`#${menuMapClone[randomKeyOfMenuMap]}`).click();
    }

    navigateToRobberyPage() {
        if(window.location.href.endsWith("/robberies")) {
            this.#logger.log(`Already on Robbery Page...`);
        }
        else {
            this.#logger.log(`Navigating to Robbery Page...`);
            $(`#${this.#MENU_MAP.ROBBERY}`).click();

        }
    }

    navigateToNightLifePage() {
        if(window.location.href.endsWith("/nightlife")) {
            this.#logger.log(`Already on Nightlife Page...`);
        }
        else {
            this.#logger.log(`Navigating to Nightlife Page...`);
            $(`#${this.#MENU_MAP.NIGHTLIFE}`).click();
        }
    }

    navigateToHospitalPage() {
        if(window.location.href.endsWith("/hospital")) {
            this.#logger.log(`Already on Hospital Page...`);
        }
        else {
            this.#logger.log(`Navigating to Hospital Page...`);
            $(`#${this.#MENU_MAP.HOSPITAL}`).click();
        }
    }

    navigateToTrainingPage() {
        if(window.location.href.endsWith("/training")) {
            this.#logger.log(`Already on Training Page...`);
        }
        else {
            this.#logger.log(`Navigating to Training Page...`);
            $(`#${this.#MENU_MAP.TRAINING}`).click();
        }
    }
}

class RequestFactory {

    static async makeGETAjaxRequestPromise(pUrl=null, customHeaders={}, pData={}) {

        if(pUrl === null) {
            throw new Error("Ajax request url is null");
        }

        const ajaxSetupObject = {
            headers: customHeaders,
            crossDomain: true
        };
        $.ajaxSetup(ajaxSetupObject);

        return await $.get(pUrl, pData);;

    }

    static async makePOSTAjaxRequestPromise(pUrl=null, customHeaders={}, pData={}) {

        if(pUrl === null) {
            throw new Error("Ajax request url is null");
        }

        const ajaxSetupObject = {
            // dataType: "json",
            crossDomain: true,
            accepts: {"*": "application/json, text/plain, */*'" },
            contentType: "application/json",
            headers: customHeaders
        };

        $.ajaxSetup(ajaxSetupObject);

        return await $.post(pUrl, JSON.stringify(pData));

    }
}

class User {

    // Fields for external class deps
    #logger = null;
    #pageNavigator = null;

    // Fields of User class
    #addictionThreshold;
    // #staminaThreshold;
    #userActionToDo;
    #specificRob;
    #useFirstRaveOfFavorites;


    #userInfoAndStats = {};
    #customHeaders = {};
    #nightClubToEnter = {};
    #nightClubEntered = {};
    #singleRobberyCalculatedToDo = {};
    #singleAssaultToDo = {};
    #trainingsToDoList = [];
    #currentTrainingToDo = {};
    #victimRespect = {};
    #huntingOptions = {};

    #channel = {};

    #delayBeforeBuyDrugInRave = {};

    constructor(config=null) {

        this.#logger = new Logger("[User]");
        this.#pageNavigator = new PageNavigator();

        if(config === null) {

            throw new Error("User configuration object cannot be null. Please pass correct configuration object in new User({}) invocation");
        }

        if(config.userActionToDo === undefined) {

            throw new Error("userActionToDo cannot be undefined");
        }

        // Check Specific Single Robbery and Gang Robbery parameters
        if((config.userActionToDo === UserActions.SINGLE_ROBBERY_SPECIFIC_ROB ||
            config.userActionToDo === UserActions.GANG_ROBBERY) &&
            config.specificRob === undefined) {

            throw new Error("With SINGLE_ROBBERY_SPECIFIC_ROB and GANG_ROBBERY the parameter specificRob cannot be undefined");
        }

        // Check Training parameters
        if(config.userActionToDo === UserActions.TRAINING) {
            if(config.trainingsToDoList === undefined) {
                throw new Error("With TRAINING the parameter trainingsToDoList cannot be undefined");
            }
            if(!Array.isArray(config.trainingsToDoList)) {
                throw new Error("With TRAINING the parameter trainingsToDoList must be an array");
            }
            if(config.trainingsToDoList.length <= 0) {
                throw new Error("With TRAINING the parameter trainingsToDoList cannot equals or lower than 0");
            }
            if(config.trainingsToDoList.length > 2) {
                throw new Error("With TRAINING the parameter trainingsToDoList cannot be greater than 2");
            }
        }

        // Hunting
        if( (config.userActionToDo === UserActions.HUNTING || 
                config.userActionToDo === UserActions.HUNTING_REMAINING_IN_RAVE)  &&
            config.huntingOptions === undefined) {

            throw new Error("With HUNTING the parameter huntingOptions cannot be null or undefined");
        }

        // Set default threshold
        if(config.addictionThreshold === undefined) {
            config.addictionThreshold = 5;
            this.#logger.logImportant(`WARNING addictionThreshold not defined. Will be used 5 as default value`);
        }

        // Favorites Rave
        if(config.useFirstRaveOfFavorites === undefined) {
            config.useFirstRaveOfFavorites = false;
            this.#logger.logImportant(`WARNING useFirstRaveOfFavorites not defined. Will be used a random rave`);
        }

        if(config.delayBeforeBuyDrugInRave === undefined) {
            config.delayBeforeBuyDrugInRave = {min: 0, max: 0};
            this.#logger.logImportant(`WARNING delayBeforeBuyDrugInRave not defined. Will be used a min:0 and max: 0`);
        }

        this.#addictionThreshold = config.addictionThreshold;
        // this.#staminaThreshold = config.staminaThreshold;
        this.#userActionToDo = config.userActionToDo;
        this.#specificRob = config.specificRob;
        this.#trainingsToDoList = config.trainingsToDoList;
        this.#useFirstRaveOfFavorites = config.useFirstRaveOfFavorites;
        this.#huntingOptions = config.huntingOptions;
        this.#delayBeforeBuyDrugInRave = config.delayBeforeBuyDrugInRave;
    }

    async sleepRandomSecondsBetween(pMin, pMax) {
        const timeToWait = RandomNumberGenerator.getFloatRandomNumberBetween(pMin, pMax)*1000;
        this.#logger.log(`Seconds to wait ${timeToWait/1000}`);
        return await new Promise(
            resolve => setTimeout(
                resolve,
                timeToWait
                // RandomNumberGenerator.getIntegerRandomNumberBetween(pMin, pMax)*1000
                
            )
        );
    }

    stringifyObjectFormatted(pObjectToStringify) {
        return JSON.stringify(pObjectToStringify, null, 2);
    }

    async doXRequestAjax() {
        return await RequestFactory.makeGETAjaxRequestPromise(
            Urls.REQUEST_ID_URL
        );
    }

    async doGetRaveVisitors() {
        return await RequestFactory.makeGETAjaxRequestPromise(
            Urls.VISITORS_URL,
            this.#customHeaders
        );
    }

    async doGetUserUpdatedValuesFromAssault() {
        return await RequestFactory.makeGETAjaxRequestPromise(
            Urls.ASSAULT_GANG_URL,
            this.#customHeaders
        );
    }

    async doGetUserUpdatedValuesFromHookers() {
        return await RequestFactory.makeGETAjaxRequestPromise(
            Urls.HOOKERS_URL,
            this.#customHeaders
        );
    }

    async doGetUserUpdatedValuesFromArmors() {
        return await RequestFactory.makeGETAjaxRequestPromise(
            Urls.ARMORS_URL,
            this.#customHeaders
        );
    }

    async doGetUserUpdatedValuesFromGuards() {
        return await RequestFactory.makeGETAjaxRequestPromise(
            Urls.GUARDS_URL,
            this.#customHeaders
        );
    }

    async doGetUserUpdatedValuesFromState() {
        return await RequestFactory.makeGETAjaxRequestPromise(
            Urls.STATE_URL,
            this.#customHeaders
        );
    }

    async doGetUserUpdatedValuesFromItems() {
        return await RequestFactory.makeGETAjaxRequestPromise(
            Urls.ITEMS_URL,
            this.#customHeaders
        );
    }

    async doGetUserUpdatedValuesFromPrison() {
        return await RequestFactory.makeGETAjaxRequestPromise(
            Urls.PRISON_URL,
            this.#customHeaders
        );
    }

    async doGetUserUpdatedValuesFromWeapons() {
        return await RequestFactory.makeGETAjaxRequestPromise(
            Urls.WEAPONS_URL,
            this.#customHeaders
        );
    }

    async doFindSingleRobberiesAjax() {
        return await RequestFactory.makeGETAjaxRequestPromise(
            Urls.ROBBERIES_URL,
            this.#customHeaders
        );
    }

    async doFindNightClubAjax() {
        return await RequestFactory.makeGETAjaxRequestPromise(
            Urls.NIGHTCLUBS_PAGE_URL,
            this.#customHeaders
        );
    }

    async doEnterNightclubAjax() {
        return await RequestFactory.makePOSTAjaxRequestPromise(
            Urls.NIGHTCLUB_ENTER_URL,
            this.#customHeaders,
            FactoryPOSTData.getEnterRavePOSTData(this.#nightClubToEnter.id)
        );
    }

    async doExitNightclubAjax() {
        return await RequestFactory.makePOSTAjaxRequestPromise(
            Urls.NIGHTCLUB_EXIT_URL,
            this.#customHeaders,
            FactoryPOSTData.getExitNightClubPOSTData(this.#nightClubEntered.exit_key)
        );
    }

    async doBuyDrugEnteredNightclubAjax() {
        return await RequestFactory.makePOSTAjaxRequestPromise(
            Urls.NIGHTCLUB_DRUG_URL,
            this.#customHeaders,
            FactoryPOSTData.getDrugPOSTData(this.#nightClubEntered.products.drugs[0].id)
        );
    }

    async doSingleRobberyAjax() {
        return await RequestFactory.makePOSTAjaxRequestPromise(
            Urls.ROBBERY_SINGLE_URL,
            this.#customHeaders,
            FactoryPOSTData.getSingleRobberyPOSTData(this.#singleRobberyCalculatedToDo.id)
        );
    }

    async doAcceptGangRobberyAjax() {
        return await RequestFactory.makePOSTAjaxRequestPromise(
            Urls.ROBBERY_GANG_ACCEPT_URL,
            this.#customHeaders,
            FactoryPOSTData.getAcceptGangRobberyPOSTData()
        );
    }

    async doExecuteGangRobberyAjax() {
        return await RequestFactory.makePOSTAjaxRequestPromise(
            Urls.ROBBERY_GANG_EXECUTE_URL,
            this.#customHeaders,
            FactoryPOSTData.getExecuteGangRobberyPOSTData()
        );
    }

    async doExecuteSingleAssaultAjax() {
        // return await RequestFactory.makePOSTAjaxRequestPromise(
        return RequestFactory.makePOSTAjaxRequestPromise(

            Urls.SINGLE_ATTACK_URL,
            this.#customHeaders,
            FactoryPOSTData.getExecuteSingleAssaultPOSTData(
                this.#singleAssaultToDo.victimId,
                this.#singleAssaultToDo.encounteredAt,
                this.#singleAssaultToDo.assaultKey,
                this.#singleAssaultToDo.createdAt
            )
        );
    }

    // async doBuyHospitalHealingsAjax() {
    //     return await RequestFactory.makePOSTAjaxRequestPromise(
    //         Urls.HEALINGS_URL,
    //         this.#customHeaders,
    //         FactoryPOSTData.getHealingsPOSTData(10, this.#userInfoAndStats.addiction)
    //     );
    // }

    async doBuyMethadoneHealingsAjax() {
        return await RequestFactory.makePOSTAjaxRequestPromise(
            Urls.HEALINGS_URL,
            this.#customHeaders,
            FactoryPOSTData.getHealingsPOSTData(Healings.CURE_ADDICTION.id, this.#userInfoAndStats.addiction)
        );
    }

    async doTrainingAjax() {
        return await RequestFactory.makePOSTAjaxRequestPromise(
            Urls.TRAINING_URL,
            this.#customHeaders,
            FactoryPOSTData.getTrainingPOSTData(this.#currentTrainingToDo.type, this.#currentTrainingToDo.time)
        );
    }

    async findNightclubByOwnerId(pOwnerId) {

        this.#pageNavigator.navigateToNightLifePage();

        // const nightclubsResponse = await this.doFindNightClubAjax();
        const nightclubsResponse = this.doFindNightClubLocalStorage();
        let nightClubFound = null;

        this.#logger.log(nightclubsResponse.nightclubs);

        nightClubFound =
        nightclubsResponse.nightclubs.filter((nClub)=>{ return nClub.owner_id === pOwnerId});
        // this.#logger.log(`Nightclub found: ${this.stringifyObjectFormatted(this.#nightClubFound)}`);

        await this.sleepRandomSecondsBetween(1,5);

        if(nightClubFound.length === 0) {
            this.#logger.logImportant(`Nightclub not found. Retrying....`);
            this.findNightclubByOwnerId(pOwnerId);
        }
        else {
            this.#logger.logImportant(`Nightclub found id: ${this.#nightClubToEnter.id}`);

        }
    }

    doFindNightClubLocalStorage() {
        return JSON.parse(localStorage.getItem('vuex')).NightclubList;
    }

    doFindUserLocalStorage() {
        return JSON.parse(localStorage.getItem('vuex')).User;
    }

    doFindSingleRobberiesLocalStorage() {
        return JSON.parse(localStorage.getItem('vuex')).Robberies;
    }

    async initializeInfo() {

        this.#logger.logImportant(`Initializing Bot... Gathering all necessary info.`);

        this.#logger.logImportant(`Bot is configured to perform ${this.#userActionToDo}`);
        this.#logger.logImportant(`If it is not the action you want to perform, stop the bot now by refreshing the page.`);
        this.#logger.logImportant(`Modify the configuration of your bot and start it again.`);

        // x-request
        const xRequestResponse = await this.doXRequestAjax();
        const xRequestId = xRequestResponse.split("settings")[1].split('"')[1];
        this.#customHeaders['x-request'] = xRequestId;
        // this.#logger.log(`x-request header: ${this.#customHeaders['x-request']}`);
        this.#logger.logImportant(`x-request header: ${this.#customHeaders['x-request']}`);


        // Find nightclub
        const nightclubsResponse = await this.doFindNightClubAjax();
        // const nightclubsResponse = this.doFindNightClubLocalStorage();

        if(this.#useFirstRaveOfFavorites === true) {
            // Take the first rave from favorites
            const userFavoritesNightclubsList = nightclubsResponse.favorites.filter((nClub)=>{ return nClub.business_id === 1});
            if(userFavoritesNightclubsList.length > 0) {
                this.#logger.logImportant(`Using first rave of user in favorites`);
                this.#nightClubToEnter = userFavoritesNightclubsList[0]; // Take the first rave from the list
            }
            else{
                throw new Error("No rave found in user favorites. Buy one or use a random rave (useFirstRaveOfFavorites: false)")
            }
        }
        else {
            // Take first rave in list of nightclubs with no restriction on min_respect and level
            this.#logger.logImportant(`Using a random rave`);
            this.#nightClubToEnter = nightclubsResponse.nightclubs
                .filter((nClub)=>{ return nClub.min_respect == null })
                .filter((nClub)=>{ return nClub.level == null })
                .filter((nClub)=>{ return nClub.business_id === 1})[0]; // Take the first rave from the list
        }
        // this.#logger.log(`Nightclub found: ${this.stringifyObjectFormatted(this.#nightClubFound)}`);
        this.#logger.logImportant(`Nightclub found id: ${this.#nightClubToEnter.id}`);


        // Enter nightclub
        const enterNightclubResponse = await this.doEnterNightclubAjax();
        this.#nightClubEntered = enterNightclubResponse.nightclub;
        // this.#logger.log(`Nightclub Entered drug: ${this.stringifyObjectFormatted(this.#nightClubEntered)}`);
        this.#logger.logImportant(`Drug in entered Nightclub: ${this.stringifyObjectFormatted(this.#nightClubEntered.products.drugs[0])}`);

        // Exit nightclub
        const exitNightclubResponse = await this.doExitNightclubAjax();
        this.#logger.logImportant("EXIT FROM RAVE (pressed Exit button)");

        this.doUpdateUserInfoAndStats();

        this.#logger.log(`Please wait... finishing initialization.`);

        // After initialization sleep for 6 seconds
        // (to avoid errors if entering again in nightclub without waiting the 5 seconds limit)
        await this.sleepRandomSecondsBetween(6,6);
        this.#logger.log(`Initialization finished`);

    }

    async needToRecharge() {
        if(this.#userActionToDo === UserActions.SINGLE_ROBBERY_SPECIFIC_ROB ||
            this.#userActionToDo === UserActions.GANG_ROBBERY) {
            // SINGLE_ROBBERY_SPECIFIC_ROB and GANG_ROBBERY threshold energy is determined
            // by the specific rob we are performing
            return this.#userInfoAndStats.stamina < this.#specificRob.energy;
        }
        else if(this.#userActionToDo === UserActions.SINGLE_ROBBERY) {
            // SINGLE_ROBBERY threshold is determined by the energy required by the min robbery
            return this.#userInfoAndStats.stamina <= SingleRobberies.SHOPLIFT.energy;
        }
        else if(this.#userActionToDo === UserActions.TRAINING) {
            // TRAINING energy should not be lower than 85 if performing training
            return this.#userInfoAndStats.stamina < 90;
        }
        else if(this.#userActionToDo === UserActions.HUNTING ||
                this.#userActionToDo === UserActions.HUNTING_REMAINING_IN_RAVE) {
            // HUNTING energy should not be lower than 50 if performing hunting
            return this.#userInfoAndStats.stamina < 50;
        }
    }

    async needToDetox() {
        return this.#userInfoAndStats.addiction >= RandomNumberGenerator.getIntegerRandomNumberBetween(2,this.#addictionThreshold);
    }

    decideWhatToDo() {

        this.#logger.log(`Action to do is ${this.#userActionToDo}`);

        switch(this.#userActionToDo) {
            case UserActions.SINGLE_ROBBERY:
            case UserActions.SINGLE_ROBBERY_SPECIFIC_ROB:
                this.doSingleRobbery();
                break;
            case UserActions.GANG_ROBBERY:
                this.doGangRobbery();
                // this.doGangRobberyWebSocket();
                break;
            case UserActions.TRAINING:
                this.doTraining();
                break;
            case UserActions.HUNTING:
                this.doHunting();
                break;
            case UserActions.HUNTING_REMAINING_IN_RAVE:
                this.doHuntingRemainingInRave();
                break;
            case UserActions.RECHARGE_ONLY:
                this.#logger.log("Recharge DONE");
                this.#logger.log("Bot will stop now");
                break;
            default:
                this.#logger.log("The user actionToDo is not correctly set");
                this.#logger.log("Nothing will be done");
                break;
        }
    }

    async doTraining() {
        try {

            this.#pageNavigator.navigateToRandomPage();

            await this.sleepRandomSecondsBetween(1,3);

            for(let trainingToDo of this.#trainingsToDoList) {
                this.#currentTrainingToDo = trainingToDo;

                this.#logger.logImportant(`Training ${this.#currentTrainingToDo.type+' - '+this.#currentTrainingToDo.time} started.`);
                this.#logger.logImportant(`Waiting the end of the training...`);
                await this.doTrainingAjax();

                // Once requested the training, wait the end of the training
                switch (this.#currentTrainingToDo.time) {
                    case "30min":
                        // Wait 35 minutes
                        // (5 minutes more than the necessary to avoid possible issue)
                        await this.sleepRandomSecondsBetween(35*60, 35*60);
                        break;
                    case "1h":
                        // Wait 1 hour and 5 minutes
                        // (5 minutes more than the necessary to avoid possible issue)
                        await this.sleepRandomSecondsBetween(65*60, 65*60);
                        break
                }
                this.#logger.logImportant(`Training ${this.#currentTrainingToDo.type+' - '+this.#currentTrainingToDo.time} done.`);

            }
            this.#logger.logImportant(`Training finished.`);
            // this.#logger.log(`Training performed: ${this.#trainingToDoList.map(training=>training.type+' - '+training.time).join('\n')}`);
        }
        catch(error) {
            console.error(error);
            this.doRechargeStamina();
        }
    }

    async doHuntingRemainingInRave() {

        var self = this;
        let hasBeenAssaultedVictim = false;
        self.#nightClubEntered = null;

        // await self.sleepRandomSecondsBetween(1, 2);
        self.#pageNavigator.navigateToRandomPage();
        await self.sleepRandomSecondsBetween(2, 3);
        self.#pageNavigator.navigateToNightLifePage();
        await self.sleepRandomSecondsBetween(6, 9);

        // const nightclubsResponse = await this.doFindNightClubAjax();
        let nightclubsResponse = self.doFindNightClubLocalStorage();

        // if useOnlyHookersHouse is true, filter only hooker mansions
        if(self.#huntingOptions.useOnlyHookersHouse) {
            nightclubsResponse.nightclubs = nightclubsResponse.nightclubs
            .filter((nClub)=>{ return nClub.business_id == 4 });
        }

        // Take the random rave from those without a limit on respect and level
        const filteredRavesList = nightclubsResponse.nightclubs
            .filter((nClub)=>{ return nClub.min_respect == null })
            .filter((nClub)=>{ return nClub.level == null });


        if(filteredRavesList.length === 0) {
            self.#logger.logImportant(`NOT FOUND A SUITABLE RAVE. TRY TO SEARCH ANOTHER RAVE`);
            self.doHuntingRemainingInRave();
        }

        const randomIndexRave = RandomNumberGenerator.getIntegerRandomNumberBetween(0, filteredRavesList.length -1);
        self.#nightClubToEnter = filteredRavesList[randomIndexRave];

        self.#logger.log(`Rave type: ${self.#nightClubToEnter.name}`);
        self.#logger.log(`Rave id: ${self.#nightClubToEnter.id}`);

        let enterNightclubResponse;

        try {
            // Enter nightclub
            enterNightclubResponse = await self.doEnterNightclubAjax();
            self.#nightClubEntered = enterNightclubResponse.nightclub;
            self.#logger.logImportant(`Enter in rave.`);
            self.#logger.logImportant(`Checking/Waiting for visitors...`);

        } catch (error) {
            self.#logger.logImportant(`ERROR ENTERING IN RAVE. TRY TO SEARCH ANOTHER RAVE.`);
            // this.doExitNightclubAjax();
            // this.#logger.logImportant("EXIT FROM RAVE (pressed Exit button)")
            // await this.sleepRandomSecondsBetween(4,5);
            self.doHuntingRemainingInRave();
        }

        let singleAssaultResult = null;
        let candidateVictim = null;



        let visitorsResponse = null;

        // Override the original The Crims _nightclub-update-visitors callback of websocket channel
        window.userChannel.callbacks._callbacks['_nightclub-update-visitors'][0].fn = async (wsEventMessage)=>{
            if(wsEventMessage.indexOf('entered') > -1) {

                self.#logger.logImportant("Visitor come inside rave");

                //***************************
                // CRITICAL LINE OF CODE
                // In case of lag of Network/The Crims this could 
                // slow down the bot and so let other user to kill us
   
                visitorsResponse = await self.doGetRaveVisitors();
                //***************************

                if(visitorsResponse.length === 1) {
                    candidateVictim = visitorsResponse[0];

                    const isVictimHitman = candidateVictim.character_text_name.indexOf('HITMAN') > -1;
        
                    self.#victimRespect.max = isVictimHitman ? self.#huntingOptions.victimRespect.hitmanMaxRespect : self.#huntingOptions.victimRespect.max;
                    self.#victimRespect.min = self.#huntingOptions.victimRespect.min;
        
                    if(isVictimHitman) {
                        self.#logger.logImportant(`Victim is a HITMAN. Max respect used: ${self.#victimRespect.max}`)
                    }
                    else {
                        self.#logger.logImportant(`Victim is NOT a HITMAN. Max respect used: ${self.#victimRespect.max}`)
                    }
        
                    if((candidateVictim.respect <= self.#victimRespect.max) &&
                                (candidateVictim.respect >= self.#victimRespect.min)) {
        
                        self.#singleAssaultToDo = {
                            victimId: candidateVictim.id,
                            encounteredAt: candidateVictim.encountered_at,
                            assaultKey: candidateVictim.assault_key,
                            createdAt: Math.floor(candidateVictim.encountered_at) - RandomNumberGenerator.getIntegerRandomNumberBetween(1,3)
                        }
    
                        try {
        
                            await self.sleepRandomSecondsBetween(
                                self.#huntingOptions.delayBeforeAttackUser,
                                self.#huntingOptions.delayBeforeAttackUser);

                            self.#logger.logImportant("ATTACKING USER");

                            clearTimeout(pidExitRaveTimeOut);
                            singleAssaultResult = self.doExecuteSingleAssaultAjax();
                            hasBeenAssaultedVictim = true;
        
                        } catch (error) {
                            clearTimeout(pidExitRaveTimeOut);
                            console.log(console.error);
                            self.doExitNightclubAjax();
                            self.#logger.logImportant("EXIT FROM RAVE (pressed Exit button)")
                            await self.sleepRandomSecondsBetween(4,5);
                            self.doHuntingRemainingInRave();
                        }
                    }
                    else {
                        clearTimeout(pidExitRaveTimeOut);
                        self.doExitNightclubAjax();
                        self.#logger.logImportant("EXIT FROM RAVE (pressed Exit button)");
                        // self.doHuntingWebSocket();
                    }

                    if(hasBeenAssaultedVictim === true){
                        self.#logger.logImportant(`Assaulted a User: ${candidateVictim.username}`);
                        // if(singleAssaultResult === undefined) {
                        //     this.#logger.logImportant('USER HAS PROTECTION ENABLED. UNFORTUNATELY NOT KILLED... :)');
                        // }
                        // else if(singleAssaultResult !== undefined && singleAssaultResult.messages[0] && singleAssaultResult.messages[0][0]) {
                        //     singleAssaultResult.messages[0][0].split("<br>").map((e)=>{this.#logger.logSuccess(`${e} \n`)});
                        // }
                        singleAssaultResult.then((assaultResponse)=>{
                            if(assaultResponse !== undefined && assaultResponse.messages !== undefined && assaultResponse.messages[0] && assaultResponse.messages[0][0]) {
                                assaultResponse.messages[0][0].split("<br>").map((e)=>{self.#logger.logSuccess(`${e} \n`)});
                            }
                            else {
            
                                console.log(assaultResponse);
                            }
                        });
                        self.#logger.logImportant('CHECK LOGS FOR DETAILS ABOUT ASSAULT');
            
                        await self.sleepRandomSecondsBetween(5,6);
                        await self.doRechargeStamina();
                    }
                    else {
                        if(visitorsResponse.length > 0) {
                            self.#logger.logImportant("Found visitors");
                            for(const visitorFound of visitorsResponse) {
                                const stringToLogAsList = [
                                    visitorFound.username,
                                    visitorFound.respect,
                                    visitorFound.level_text_name,
                                    // visitorFound.id,
                                ];
                                self.#logger.logImportant(stringToLogAsList.join(' - '));
                                if(visitorFound.respect > self.#victimRespect.max) {
                                    self.#logger.logImportant(`Found VISITOR WITH RESPECT GREATER than MAX RESPECT(${self.#victimRespect.max}): ${visitorFound.respect}`);
                                }
                                else if(visitorFound.respect < self.#victimRespect.min) {
                                    self.#logger.logImportant(`Found VISITOR WITH RESPECT LOWER than MIN RESPECT(${self.#victimRespect.min}): ${visitorFound.respect}`);
                                }
                            }
                        }
                        else {
                            self.#logger.log("NO VISITORS FOUND");
                        }
                        clearTimeout(pidExitRaveTimeOut);
                        self.#logger.logImportant("Nothing DONE");
                        await self.sleepRandomSecondsBetween(1,3);
                        self.doHuntingRemainingInRave();
                    }
                }
                else {
                    self.#logger.logImportant("MORE THAN 1 VISITOR IN RAVE");
                    clearTimeout(pidExitRaveTimeOut);
                    self.doExitNightclubAjax();
                    self.#logger.logImportant("EXIT FROM RAVE (pressed Exit button)");
                    if(visitorsResponse.length > 0) {
                        self.#logger.logImportant("Found visitors");
                        for(const visitorFound of visitorsResponse) {
                            const stringToLogAsList = [
                                visitorFound.username,
                                visitorFound.respect,
                                visitorFound.level_text_name,
                                // visitorFound.id,
                            ];
                            self.#logger.logImportant(stringToLogAsList.join(' - '));
                            if(visitorFound.respect > self.#victimRespect.max) {
                                self.#logger.logImportant(`Found VISITOR WITH RESPECT GREATER than MAX RESPECT(${self.#victimRespect.max}): ${visitorFound.respect}`);
                            }
                            else if(visitorFound.respect < self.#victimRespect.min) {
                                self.#logger.logImportant(`Found VISITOR WITH RESPECT LOWER than MIN RESPECT(${self.#victimRespect.min}): ${visitorFound.respect}`);
                            }
                        }
                    }
                    await self.sleepRandomSecondsBetween(1,3);
                    self.doHuntingRemainingInRave();
                }
            }
        };
        
        const timeToWait = 10;
        const pidExitRaveTimeOut = setTimeout(async () => {
            self.#logger.logImportant(`Passed ${timeToWait} seconds and no visitors come inside rave.`);
            // self.doExitNightclubAjax();
            // self.#logger.logImportant("EXIT FROM RAVE (pressed Exit button)");
            // await self.sleepRandomSecondsBetween(3,5);
            self.doHuntingRemainingInRave();
        }, timeToWait*1000);
    }

    async doHunting() {

        this.#nightClubEntered = null;

        let hasBeenAssaultedVictim = false;

        await this.sleepRandomSecondsBetween(5, 6);

        this.#pageNavigator.navigateToRandomPage();

        await this.sleepRandomSecondsBetween(1, 2);

        this.#pageNavigator.navigateToNightLifePage();

        await this.sleepRandomSecondsBetween(6, 9);

        // const nightclubsResponse = await this.doFindNightClubAjax();
        let nightclubsResponse = this.doFindNightClubLocalStorage();

        // if useOnlyHookersHouse is true, filter only hooker mansions
        if(this.#huntingOptions.useOnlyHookersHouse) {
            nightclubsResponse.nightclubs = nightclubsResponse.nightclubs
            .filter((nClub)=>{ return nClub.business_id == 4 });
        }

        // Take the random rave from those without a limit on respect and level
        const filteredRavesList = nightclubsResponse.nightclubs
            .filter((nClub)=>{ return nClub.min_respect == null })
            .filter((nClub)=>{ return nClub.level == null });


        if(filteredRavesList.length === 0) {
            this.#logger.logImportant(`NOT FOUND A SUITABLE RAVE. TRY TO SEARCH ANOTHER RAVE`);
            this.doHunting();
        }

        const randomIndexRave = RandomNumberGenerator.getIntegerRandomNumberBetween(0, filteredRavesList.length -1);
        this.#nightClubToEnter = filteredRavesList[randomIndexRave];

        this.#logger.log(`Rave type: ${this.#nightClubToEnter.name}`);
        this.#logger.log(`Rave id: ${this.#nightClubToEnter.id}`);

        let enterNightclubResponse;

        try {
            // Enter nightclub
            enterNightclubResponse = await this.doEnterNightclubAjax();
            this.#nightClubEntered = enterNightclubResponse.nightclub;
        } catch (error) {
            this.#logger.logImportant(`ERROR ENTERING IN RAVE. TRY TO SEARCH ANOTHER RAVE.`);
            // this.doExitNightclubAjax();
            // this.#logger.logImportant("EXIT FROM RAVE (pressed Exit button)")
            // await this.sleepRandomSecondsBetween(4,5);
            this.doHunting();
        }

        let singleAssaultResult = null;
        let candidateVictim = null;

        // Only if there's 1 visitor check it is "killable"
        if(this.#nightClubEntered && this.#nightClubEntered.visitors.length === 1) {

            candidateVictim = this.#nightClubEntered.visitors[0];

            const isVictimHitman = candidateVictim.character_text_name.indexOf('HITMAN') > -1;

            this.#victimRespect.max = isVictimHitman ? this.#huntingOptions.victimRespect.hitmanMaxRespect : this.#huntingOptions.victimRespect.max;
            this.#victimRespect.min = this.#huntingOptions.victimRespect.min;

            if(isVictimHitman) {
                this.#logger.logImportant(`Victim is a HITMAN. Max respect used: ${this.#victimRespect.max}`)
            }
            else {
                this.#logger.logImportant(`Victim is NOT a HITMAN. Max respect used: ${this.#victimRespect.max}`)
            }

            if((candidateVictim.respect <= this.#victimRespect.max) &&
                        (candidateVictim.respect >= this.#victimRespect.min)) {

                this.#singleAssaultToDo = {
                    victimId: candidateVictim.id,
                    encounteredAt: candidateVictim.encountered_at,
                    assaultKey: candidateVictim.assault_key,
                    createdAt: Math.floor(candidateVictim.encountered_at) - RandomNumberGenerator.getIntegerRandomNumberBetween(1,3)
                }
                try {
                    // singleAssaultResult = await this.doExecuteSingleAssaultAjax();

                    await this.sleepRandomSecondsBetween(
                        this.#huntingOptions.delayBeforeAttackUser,
                        this.#huntingOptions.delayBeforeAttackUser);

                    singleAssaultResult = this.doExecuteSingleAssaultAjax();
                    hasBeenAssaultedVictim = true;

                } catch (error) {
                    console.log(console.error);
                    this.doExitNightclubAjax();
                    this.#logger.logImportant("EXIT FROM RAVE (pressed Exit button)")
                    await this.sleepRandomSecondsBetween(4,5);
                    this.doHunting();
                }
            }

        }

        this.doExitNightclubAjax();
        this.#logger.logImportant("EXIT FROM RAVE (pressed Exit button)");

        if(hasBeenAssaultedVictim === true){
            this.#logger.logImportant(`Assaulted a User: ${candidateVictim.username}`);
            // if(singleAssaultResult === undefined) {
            //     this.#logger.logImportant('USER HAS PROTECTION ENABLED. UNFORTUNATELY NOT KILLED... :)');
            // }
            // else if(singleAssaultResult !== undefined && singleAssaultResult.messages[0] && singleAssaultResult.messages[0][0]) {
            //     singleAssaultResult.messages[0][0].split("<br>").map((e)=>{this.#logger.logSuccess(`${e} \n`)});
            // }
            singleAssaultResult.then((assaultResponse)=>{
                if(assaultResponse !== undefined && assaultResponse.messages !== undefined && assaultResponse.messages[0] && assaultResponse.messages[0][0]) {
                    assaultResponse.messages[0][0].split("<br>").map((e)=>{this.#logger.logSuccess(`${e} \n`)});
                }
                else {

                    console.log(assaultResponse);
                }
            });
            this.#logger.logImportant('CHECK LOGS FOR DETAILS ABOUT ASSAULT');

            await this.sleepRandomSecondsBetween(5,6);
            await this.doRechargeStamina();
        }
        else {
            if(this.#nightClubEntered.visitors.length > 0) {
                this.#logger.logImportant("Found visitors");
                for(const visitorFound of this.#nightClubEntered.visitors) {
                    const stringToLogAsList = [
                        visitorFound.username,
                        visitorFound.respect,
                        visitorFound.level_text_name,
                        // visitorFound.id,
                    ];
                    this.#logger.logImportant(stringToLogAsList.join(' - '));
                    if(visitorFound.respect > this.#victimRespect.max) {
                        this.#logger.logImportant(`Found VISITOR WITH RESPECT GREATER than MAX RESPECT(${this.#victimRespect.max}): ${visitorFound.respect}`);
                    }
                    else if(visitorFound.respect < this.#victimRespect.min) {
                        this.#logger.logImportant(`Found VISITOR WITH RESPECT LOWER than MIN RESPECT(${this.#victimRespect.min}): ${visitorFound.respect}`);
                    }
                }
            }
            else {
                this.#logger.log("NO VISITORS FOUND");
            }
            this.#logger.logImportant("Nothing DONE");

            this.doHunting();
        }
    }

    // async doGangRobberyWebSocket() {
        
    //     var self = this;

    //     this.#pageNavigator.navigateToRobberyPage();

    //     // await this.sleepRandomSecondsBetween(0.2, 0.4);

    //     window.userChannel.callbacks._callbacks['_update-planned-robbery'][0].fn = async (wsEventMessage)=>{

    //         const isEnabledAccept = wsEventMessage.indexOf('create') > -1;
    //         const isEnabledExecute = wsEventMessage.indexOf('populate') > -1;

    //         if(isEnabledAccept) {
    //             const gangRobberyResponse = await this.doAcceptGangRobberyAjax();
    //             this.#logger.log("Accepted Gang Robbery");
        
    //             // Update user info and perform decision
    //             this.postGangRobberyWebSocket(gangRobberyResponse);
    //         }
    //         else if(isEnabledExecute) {
    //             const gangRobberyResponse = await this.doExecuteGangRobberyAjax();

    //             this.#logger.log("Executed Gang Robbery");
        
    //             // Update user info and perform decision
    //             this.postGangRobberyWebSocket(gangRobberyResponse);
    //         }
    //         else {
    //             this.#logger.log("Waiting for others to accept...");
    //         }

    //     };

    // }

    // async postGangRobberyWebSocket(pGangRobberyResponse) {
    //     // Update user info
    //     this.doUpdateUserInfoAndStats(pGangRobberyResponse.user);
    //     // await this.sleepRandomSecondsBetween(0.1, 1);

    //     // this.#pageNavigator.navigateToRandomPage();

    //     if(await this.needToRecharge()) {
    //         await this.doRechargeStamina();
    //     }
    //     else {
    //         this.doGangRobberyWebSocket();
    //     }
    // }

    async doGangRobbery() {

        try {
            this.#pageNavigator.navigateToRobberyPage();

            await this.sleepRandomSecondsBetween(0.2, 0.4);

            let isEnabledAccept = $($("#gangrobbery-accept")[0]).attr("style") === undefined || $($("#gangrobbery-accept")[0]).attr("style") === '';
            let isEnabledExecute = $($("#gangrobbery-execute")[0]).attr("style") === undefined || $($("#gangrobbery-execute")[0]).attr("style") === '';

            this.#logger.log(`Accept button found: ${isEnabledAccept ? 'YES' : 'NO'}`);
            this.#logger.log(`Execute button found: ${isEnabledExecute? 'YES' : 'NO'}`);

            if(isEnabledAccept) {
                const gangRobberyResponse = await this.doAcceptGangRobberyAjax();
                this.#logger.log("Accepted Gang Robbery");

                // Update user info and perform decision
                this.postGangRobbery(gangRobberyResponse);
            }
            else if(isEnabledExecute) {
                const gangRobberyResponse = await this.doExecuteGangRobberyAjax();

                this.#logger.logImportant("Executed Gang Robbery");

                // Update user info and perform decision
                this.postGangRobbery(gangRobberyResponse);
            }
            else {
                this.#logger.logImportant("Waiting for others to accept...");
                // this.#pageNavigator.navigateToRandomPage();

                this.doGangRobbery();
            }

        } catch (error) {
            console.error(error);
            this.doRechargeStamina();
        }


    }



    async postGangRobbery(pGangRobberyResponse) {
        // Update user info
        this.doUpdateUserInfoAndStats(pGangRobberyResponse.user);

        await this.sleepRandomSecondsBetween(0.1, 1);

        this.#pageNavigator.navigateToRandomPage();

        if(await this.needToRecharge()) {
            await this.doRechargeStamina();
        }
        else {
            this.doGangRobbery();
        }
    }

    calculateSingleRobberyToDo(pSingleRobberiesList) {
        let calculatedRobToDo = null;

        try {
            switch (this.#userActionToDo) {
                case UserActions.SINGLE_ROBBERY:
                    calculatedRobToDo = pSingleRobberiesList
                        .filter((rob)=>{ return rob.successprobability === 100} )   // Filter all rob wih success 100
                        .filter((rob)=>{ return rob.rewards.length === 0} ) // Filter all robs without rewards (low money)
                        .filter((rob)=>{ return rob.energy <= this.#userInfoAndStats.stamina} ) // Filter all rob that can be performed based on current user stamina
                        .reduce((rob1, rob2)=>{ return rob1.difficulty > rob2.difficulty ? rob1 : rob2} )  // Get the one with max difficulty
                    break;
                case UserActions.SINGLE_ROBBERY_SPECIFIC_ROB:
                    calculatedRobToDo = pSingleRobberiesList
                    .filter((rob)=>{ return rob.id === this.#specificRob.id})[0]; // Find the rob with the specified id
                    break;
                default:
                    this.#logger.log(`No Single Robbery Action Enum matched`);
                    throw new Error("No Single Robbery Action Enum matched");
                    break;
            }
        } catch (error) {
            this.#logger.logImportant(`ENERGY IS TOO LOW FOR ANY SINGLE ROB`);
            this.#logger.logImportant(`RECHARGE IS NEEDED`);

        }


        return calculatedRobToDo;
    }

    async doSingleRobbery() {

        try {
            this.#pageNavigator.navigateToRobberyPage();

            // Once opened the page, wait some random time
            await this.sleepRandomSecondsBetween(1,2);

            // Find Single Robberies List
            const singleRobberiesResponse = this.doFindSingleRobberiesLocalStorage();
            // Calculate Single Robbery to do
            this.#singleRobberyCalculatedToDo = this.calculateSingleRobberyToDo(singleRobberiesResponse.singleRobberies);

            // If this.#singleRobberyCalculatedToDo is null, it means that energy is lower
            if(this.#singleRobberyCalculatedToDo !== null) {
                this.#logger.logImportant(`Single Robbery calculated: ${this.#singleRobberyCalculatedToDo.long_name}`);

                const singleRobberyResponse = await this.doSingleRobberyAjax();
                if(singleRobberyResponse.messages[0] && singleRobberyResponse.messages[0][0]) {
                    singleRobberyResponse.messages[0][0].split("<br />").map((e)=>{this.#logger.logSuccess(`${e} \n`)});
                }

                // Update user info
                this.doUpdateUserInfoAndStats(singleRobberyResponse.user);
            }

            // await this.sleepRandomSecondsBetween(1,2);
            if(await this.needToRecharge()) {
                await this.doRechargeStamina();
            }

        } catch (error) {
            console.error(error);
            this.doSingleRobbery();
        }
    }

    printUserInfoAndStats() {
        this.#logger.log('************* User Stats and Info *************');
        // this.#logger.log(`Assault Points: ${this.#userInfoAndStats.assault_points}`);
        // this.#logger.log(`Assault Power: ${this.#userInfoAndStats.assault_power}`);
        // this.#logger.log(`Credits: ${this.#userInfoAndStats.credits}`);
        // this.#logger.log(`Gang Robbery Power: ${this.#userInfoAndStats.gang_robbery_power}`);
        // this.#logger.log(`HP: ${this.#userInfoAndStats.hp}`);
        // this.#logger.log(`Level: ${this.#userInfoAndStats.level}`);
        // this.#logger.log(`Robbery Power: ${this.#userInfoAndStats.robbery_power}`);
        // this.#logger.log(`Single Robbery Power: ${this.#userInfoAndStats.single_robbery_power}`);
        this.#logger.log(`Respect: ${this.#userInfoAndStats.respect}`);
        this.#logger.log(`Addiction: ${this.#userInfoAndStats.addiction}`);
        this.#logger.log(`Stamina: ${this.#userInfoAndStats.stamina}`);
        this.#logger.log(`Tickets: ${this.#userInfoAndStats.tickets}`);
        this.#logger.log(`Strength: ${this.#userInfoAndStats.strength}`);
        this.#logger.log(`Intelligence: ${this.#userInfoAndStats.intelligence}`);
        this.#logger.log(`Tolerance: ${this.#userInfoAndStats.tolerance}`);
        this.#logger.log(`Charisma: ${this.#userInfoAndStats.charisma}`);
        this.#logger.log(`Cash: ${Utils.cashFormatter.format(this.#userInfoAndStats.cash)}`);
        // this.#logger.log(`Bank: ${Utils.cashFormatter.format(this.#userInfoAndStats.bank)}`);
        this.#logger.log('************************************************');
    }

    async doUpdateUserInfoAndStats(pUser=null) {
        if(pUser===null) {
            // Use doFindNightClub() to get user info and stats

            const randomIndex = RandomNumberGenerator.getIntegerRandomNumberBetween(1,8);
            let responseWhereGrabUserInfo = null;
            switch (randomIndex) {
                case 1:
                    responseWhereGrabUserInfo = await this.doGetUserUpdatedValuesFromAssault();
                    this.#logger.logImportant('REFRESHED USER STATS FROM ASSAULT');
                    break;
                case 2:
                    responseWhereGrabUserInfo = await this.doGetUserUpdatedValuesFromHookers();
                    this.#logger.logImportant('REFRESHED USER STATS FROM HOOKERS');
                    break;
                case 3:
                    responseWhereGrabUserInfo = await this.doGetUserUpdatedValuesFromArmors();
                    this.#logger.logImportant('REFRESHED USER STATS FROM ARMORS');
                    break;
                case 4:
                    responseWhereGrabUserInfo = await this.doGetUserUpdatedValuesFromWeapons();
                    this.#logger.logImportant('REFRESHED USER STATS FROM WEAPONS');
                    break;
                case 5:
                    responseWhereGrabUserInfo = await this.doGetUserUpdatedValuesFromState();
                    this.#logger.logImportant('REFRESHED USER STATS FROM STATE');
                    break;
                case 6:
                    responseWhereGrabUserInfo = await this.doGetUserUpdatedValuesFromGuards();
                    this.#logger.logImportant('REFRESHED USER STATS FROM GUARDS');
                    break;
                case 7:
                    responseWhereGrabUserInfo = await this.doGetUserUpdatedValuesFromItems();
                    this.#logger.logImportant('REFRESHED USER STATS FROM ITEMS');
                    break;
                case 8:
                    responseWhereGrabUserInfo = await this.doGetUserUpdatedValuesFromPrison();
                    this.#logger.logImportant('REFRESHED USER STATS FROM PRISON');
                    break;
                default:
                    responseWhereGrabUserInfo = await this.doGetUserUpdatedValuesFromState();
                    this.#logger.logImportant('REFRESHED USER STATS FROM STATE');
                    break;
            }
            
            this.#userInfoAndStats = responseWhereGrabUserInfo.user;

        }
        else {
            // Update stats from object user passed to the function
            // This is the case of Single Robbery or Gang Robbery
            this.#userInfoAndStats = pUser;
            this.#logger.logImportant('REFRESHED USER STATS FROM ROB OR AFTER A RECHARGE STAMINA');
        }

        this.printUserInfoAndStats();
        await this.checkIfTicketsAreEnded();


    }

    async checkIfTicketsAreEnded() {
        if(this.#userInfoAndStats.tickets === 0) {
            this.#logger.logImportant("**********************************************");
            this.#logger.logImportant("**********************************************");
            this.#logger.logImportant("**********************************************");
            this.#logger.logImportant("**********************************************");
            this.#logger.logImportant("TICKETS ARE OVER. BOT WILL STOP.");
            await this.sleepRandomSecondsBetween(9999999,9999999);    // SIMULATE STOP
        }
    }

    async doDetox() {
        this.#pageNavigator.navigateToHospitalPage();

        await this.sleepRandomSecondsBetween(1,3);

        await this.doBuyMethadoneHealingsAjax();
    }

    async doRechargeStamina() {

        try {
            this.#pageNavigator.navigateToNightLifePage();

            await this.sleepRandomSecondsBetween(1,3);
            
            if(!(this.#userActionToDo === UserActions.SINGLE_ROBBERY || 
                this.#userActionToDo === UserActions.SINGLE_ROBBERY_SPECIFIC_ROB ||
                this.#userActionToDo === UserActions.GANG_ROBBERY)) {

                    await this.doUpdateUserInfoAndStats();
            }

            // Check detox is needed
            if(await this.needToDetox()) {
                this.#logger.log(`Addiction is greater or equals to threshold (${this.#addictionThreshold})`);
                this.#logger.log(`Current Addiction is: ${this.#userInfoAndStats.addiction}`);
                this.#logger.logImportant(`Detox IS necessary`);

                await this.doDetox();
            }
            else {
                this.#logger.log(`Addiction is lower than threshold (${this.#addictionThreshold})`);
                this.#logger.log(`Current Addiction is: ${this.#userInfoAndStats.addiction}`);
                this.#logger.logImportant(`Detox NOT necessary`);

            }

            // Check recharge is needed
            if(await this.needToRecharge()) {
                this.#logger.log(`Current stamina is: ${this.#userInfoAndStats.stamina}`);
                this.#logger.logImportant(`Stamina recharge IS necessary`);

                // Enter nightclub
                const enterNightclubResponse = await this.doEnterNightclubAjax();
                this.#nightClubEntered = enterNightclubResponse.nightclub;
                this.#logger.log(`Enter in rave`);

                // If found someone, try to exit immediately
                if(this.#nightClubEntered.visitors.length >= 1) {
                    this.#logger.logImportant("Found visitors:");
                    for(const visitorFound of this.#nightClubEntered.visitors) {
                        const stringToLogAsList = [
                            visitorFound.username,
                            visitorFound.respect,
                            visitorFound.level_text_name,
                            // visitorFound.id,
                        ];
                        this.#logger.logImportant(stringToLogAsList.join(' - '));
                    }
                    this.#logger.logImportant("WILL EXIT IMMEDIATELY!!!");

                    // Exit nightclub
                    await this.doExitNightclubAjax();
                    this.#logger.logImportant("EXIT FROM RAVE (pressed Exit button)");


                    // await this.doUpdateUserInfoAndStats();
                    // await this.doRechargeStamina();

                    await this.sleepRandomSecondsBetween(1,3);

                }
                else {

                    // Perform drug buy
                    await this.sleepRandomSecondsBetween(this.#delayBeforeBuyDrugInRave.min, this.#delayBeforeBuyDrugInRave.max);

                    const boughtDrugResponse = await this.doBuyDrugEnteredNightclubAjax();
                    this.doUpdateUserInfoAndStats(boughtDrugResponse.user);
                    this.#logger.logImportant(`Bought drug`);
                    this.#logger.logImportant(`Current stamina: ${boughtDrugResponse.user.stamina}`);

                    // Exit nightclub
                    await this.doExitNightclubAjax();
                    this.#logger.logImportant("EXIT FROM RAVE (pressed Exit button)");
                }




                // await this.doUpdateUserInfoAndStats();
            }
            else {
                this.#logger.log(`Current stamina is: ${this.#userInfoAndStats.stamina}`);
                this.#logger.logImportant(`Stamina recharge NOT necessary`);
            }

            this.decideWhatToDo();
        }
        catch(error) {
            console.error(error);
            this.decideWhatToDo();
        }
    }

    start() {
        // The starting point is the recharge stamina
        // We are sure to start the bot with full energy
        this.doRechargeStamina();
    }

}


class FactoryPOSTData {
    static getExitNightClubPOSTData(pExitKey) {
        return {reason: "Manual exit", exit_key: pExitKey, e_at: null, input_counters:{}, action_timestamp: Date.now()};
    }

    static getEnterRavePOSTData(pNightclubId) {
        return {id: pNightclubId, input_counters: {}, action_timestamp: Date.now()};
    }

    static getDrugPOSTData(pDrugId) {
        return {id: pDrugId, input_counters: {}, action_timestamp: Date.now()};
    }

    static getHealingsPOSTData(pTypeId, pQuantity) {
        return {id: pTypeId, quantity:""+pQuantity, input_counters: {}, action_timestamp: Date.now()};
    }

    static getSingleRobberyPOSTData(pSingleRobberyId) {
        return {id: pSingleRobberyId, full:true, tickets:null, items:[], input_counters:{}, action_timestamp: Date.now()};
    }

    static getAcceptGangRobberyPOSTData() {
        return { action_timestamp: Date.now(), input_counters: {} };
    }

    static getExecuteGangRobberyPOSTData() {
        return { action_timestamp: Date.now(), input_counters: {} };
    }

    static getExecuteSingleAssaultPOSTData(
        pVictimId,
        pEncounteredAt,
        pAssaultKey,
        pCreatedAt,
    ) {
        return {
            victim_id: pVictimId,
            encountered_at:pEncounteredAt,
            assault_key: pAssaultKey,
            created_at: pCreatedAt,
            input_counters:{},
            action_timestamp: Date.now() - RandomNumberGenerator.getIntegerRandomNumberBetween(2,5)};
    }

    static getTrainingPOSTData(pTrainingType, pTrainingTime) {
        return {type: pTrainingType, time: pTrainingTime, input_counters: {}, action_timestamp: Date.now()};
    }
}

const Healings = Object.freeze({
    INTELLIGENCE:   {"id":1,"name":"Brainstim","type_name":"Intelligence"},
    STRENGTH:       {"id":2,"name":"Anabola","type_name":"Strength"},
    CHARISMA:       {"id":3,"name":"Love potion","type_name":"Charisma"},
    TOLERANCE:      {"id":7,"name":"Creatine fuel","type_name":"Tolerance"},
    CURE_ADDICTION: {"id":10,"name":"Methadone","type_name":"Cure addiction"}
});

const Trainings = Object.freeze({
    GYM_30min:          {"type": "gym", "time": "30min"},
    GYM_1h:             {"type": "gym", "time": "1h"},
    EDUCATION_30min:    {"type": "education", "time": "30min"},
    EDUCATION_1h:       {"type": "education", "time": "1h"},
    CASANOVA_30min:     {"type": "casanova", "time": "30min"},
    CASANOVA_1h:        {"type": "casanova", "time": "1h"},
    MARTIAL_ARTS_30min: {"type": "martialarts", "time": "30min"},
    MARTIAL_ARTS_1h:    {"type": "martialarts", "time": "1h"},
});

const GangRobberies = Object.freeze({
    FOREX:                      {"id":1,"energy":25},
    BANK:                       {"id":2,"energy":25},
    VALUE_TRANSPORT:            {"id":3,"energy":25},
    FEDERAL_RESERVE:            {"id":4,"energy":25},
    STEVEN_SEAGULL:             {"id":5,"energy":25},
    AL_CAPONE:                  {"id":6,"energy":25},
    BUCKINGHAM_PALACE:          {"id":7,"energy":25},
    DRUG_FACTORY:               {"id":10,"energy":25},
    CASINO_ROYALE:              {"id":11,"energy":50},
    MANIPULATE_STOCK_MARKET:    {"id":12,"energy":25},
    GILL_BATES:                 {"id":16,"energy":50},
    FORT_KNOX:                  {"id":8,"energy":50},
    BITCOIN_BANK:               {"id":null,"energy":50},    // ID IS MISSING. NEED TO ADD WHEN AVAILABLE IN GAME
    ILLUMINATI:                 {"id":null,"energy":100},   // ID IS MISSING. NEED TO ADD WHEN AVAILABLE IN GAME
    OIL_TYCOON_DUBAI:           {"id":13,"energy":100},
    BILL_GATES:                 {"id":null,"energy":100},   // ID IS MISSING. NEED TO ADD WHEN AVAILABLE IN GAME
});

const SingleRobberies = Object.freeze({
    SHOPLIFT:           {"id":1,"energy":5},
    OLD_LADY:           {"id":2,"energy":10},
    CAR_BREAK_IN:       {"id":3,"energy":10},
    TAXI:               {"id":4,"energy":10},
    HOUSE:              {"id":6,"energy":10},
    GAS_STATION:        {"id":7,"energy":10},
    GROCERY_STORE:      {"id":8,"energy":10},
    KIDNAPPING:         {"id":10,"energy":20},
    JEWELLERY:          {"id":11,"energy":20},
    LITTLE_CITY_BANK:   {"id":12,"energy":20},
    MAFFIA_BOSS:        {"id":13,"energy":25},
    CAR_SALOON:         {"id":14,"energy":20},
    LOCAL_BASTARDS:     {"id":16,"energy":25},
    LOCAL_DEALER:       {"id":17,"energy":50},
    CASINO:             {"id":18,"energy":50},
    RAVE_PARTY:         {"id":19,"energy":50},
    NATIONAL_MUSEUM:    {"id":21,"energy":50},
    GRANDE_MAFIOSO:     {"id":22,"energy":20},
    CARNIVAL:           {"id":23,"energy":10},
    DRUG_KING:          {"id":24,"energy":25},
    SAFETY_DEPOSIT:     {"id":26,"energy":25},
    RUSSIAN_DRUG_KING:  {"id":27,"energy":50},
    COMPUTER_STORE:     {"id":29,"energy":25},
    MOTORCYCLE_GANG:    {"id":30,"energy":50},
    CHUCK_NORRIS:       {"id":31,"energy":25},
    THE_VATICAN:        {"id":33,"energy":50},
    SEA_CAPTAIN:        {"id":35,"energy":25},
    MILLIONAIRE_YACHT:  {"id":39,"energy":33},
    MOROCCAN_HARBOUR:   {"id":40,"energy":50},
    PHARMACY:           {"id":41,"energy":50},
    AMBULANCE:          {"id":42,"energy":50},
    DRUG_FACTORY:       {"id":43,"energy":50},
    HARDWARE_STORE:     {"id":44,"energy":50},
    HOSPITAL:           {"id":45,"energy":50},
    LOCAL_PUSHER:       {"id":46,"energy":50},
    TALIBAN_SQUAD:      {"id":47,"energy":50},
    LATIN_KINGS:        {"id":48,"energy":50},
    JAMAICAN_CREW:      {"id":49,"energy":50},
    THE_REDNECKS_CREW:  {"id":50,"energy":50},
    VOODOO_PRIEST:      {"id":51,"energy":50},

    // SOME ROBBERIES ARE MISSING
    // NEED TO ADD THE MISSING ONE WHEN AVAILABLE IN GAME
});


// Single Robbery
// const user = new User({
//     useFirstRaveOfFavorites: true,
//     delayBeforeBuyDrugInRave: {min: 0.3, max: 0.5},
//     userActionToDo: UserActions.SINGLE_ROBBERY,
// });


// Single Robbery Specific Rob
// const user = new User({
//     useFirstRaveOfFavorites: false,
//     delayBeforeBuyDrugInRave: {min: 0.3, max: 0.5},
//     userActionToDo: UserActions.SINGLE_ROBBERY_SPECIFIC_ROB,
//     specificRob: SingleRobberies.COMPUTER_STORE
// });


// Gang Robbery
// const user = new User({
//     useFirstRaveOfFavorites: false,
//     delayBeforeBuyDrugInRave: {min: 0.3, max: 0.5},
//     userActionToDo: UserActions.GANG_ROBBERY,
//     specificRob: GangRobberies.DRUG_FACTORY
// });

// Training
// const user = new User({
//     useFirstRaveOfFavorites: true,
//     delayBeforeBuyDrugInRave: {min: 0.3, max: 0.5},
//     userActionToDo: UserActions.TRAINING,
//     trainingsToDoList: [Trainings.MARTIAL_ARTS_30min, Trainings.EDUCATION_30min]
// });

// Hunting
// const user = new User({
//     useFirstRaveOfFavorites: true,
//     delayBeforeBuyDrugInRave: {min: 0.3, max: 0.5},
//     huntingOptions: {
//         victimRespect: {min: 500, max: 4000, hitmanMaxRespect: 3000},
//         delayBeforeAttackUser: 0.1,
//         useOnlyHookersHouse: false
//     },
//     userActionToDo: UserActions.HUNTING,
// });

// Hunting Remaining in Rave
const user = new User({
    useFirstRaveOfFavorites: true,
    delayBeforeBuyDrugInRave: {min: 0.3, max: 0.5},
    huntingOptions: {
        victimRespect: {min: 500, max: 18000, hitmanMaxRespect: 10000},
        delayBeforeAttackUser: 0.1,
        useOnlyHookersHouse: false
    },
    userActionToDo: UserActions.HUNTING_REMAINING_IN_RAVE,
});

// Always call initialize method
await user.initializeInfo();
user.start();
