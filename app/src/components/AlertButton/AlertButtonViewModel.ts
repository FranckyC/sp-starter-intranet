import * as i18n from "i18next";

class AlertButtonViewModel {

    public alertLink: KnockoutObservable<string>;
    public alertBtnLabel: KnockoutObservable<string>;
    public alertBtnDesc: KnockoutObservable<string>;

    constructor(params: any) {

        this.alertBtnLabel = ko.observable(i18n.t("alertBtnLabel"));
        this.alertBtnDesc = ko.observable(i18n.t("alertBtnDesc"));
        this.alertLink = ko.observable(`${_spPageContextInfo.webAbsoluteUrl}/_layouts/SubNew.aspx?List=${_spPageContextInfo.pageListId}&Source=${encodeURIComponent(_spPageContextInfo.serverRequestPath)}`)
    }

}

export default AlertButtonViewModel;