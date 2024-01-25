function readMT304message(String message) {
    var mt304 = new MT304();
    mt304.setSender("BICFOOYYAXXX");
    mt304.setReceiver("BICFOOYYBXXX");
    mt304.setMessagePriority("N");
    mt304.setDeliveryMonitoring("2");
    mt304.setObsolescencePeriod("020");
    mt304.setField20("REFERENCE");
    mt304.setField21("RELREF");
    mt304.setField25("12345678");
    mt304.setField30("20111205");
    mt304.setField32A("111205USD1234567,89");
    mt304.setField33B("USD1234567,89");
    mt304.setField36("1/1");
    mt304.setField50A("FOOBICYYAXXX");
    mt304.setField50F("FOOBICYYFXXX");
    mt304.setField50K("FOOBICYYAXXX");
    mt304.setField52A("FOOBICYYAXXX");
    mt304.setField53A("FOOBICYYAXXX");
    mt304.setField54A("FOOBICYYAXXX");
    mt304.setField56A("FOOBICYYAXXX");
    mt304.setField57A("FOOBICYYAXXX");
    mt304.setField59("FOOBICYYAXXX");
    mt304.setField70("REASON FOR PAYMENT");
    mt304.setField71A("OUR");
    mt304.setField71F("BEN");
    mt304.setField71G("BEN");
    mt304.setField72("DETAILS OF CHARGES");
    mt304.setField77B("USD1234567,89");
    mt304.setField77T("USD1234567,89");
    mt304.setField77U("USD1234567,89");
    mt304.setField77H("USD1234567,89");
    mt304.setField77D("USD1234567,89");
    mt304.setField77E("USD1234567,89");
    mt304.setField77L("USD1234567,89");
    mt304.setField77J("USD1234567,89");
    mt304.setField77Z("USD1234567,89");
    mt304.setField77V("USD1234567,89");
    mt304.setField77