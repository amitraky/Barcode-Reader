
exports.defineAutoTests = function() {
    var scanner;
    describe('cordova.require object should exist', function () {
        it("should exist", function() {
            expect(window.cordova).toBeDefined();
            expect(typeof cordova.require == 'function').toBe(true);
        });

        it("BarcodeScanner plugin should exist", function() {
            scanner = cordova.plugins.barcodeScanner; 
            expect(scanner).toBeDefined();
            expect(typeof scanner == 'object').toBe(true);
        });

        it("should contain a scan function", function() {
            expect(scanner.scan).toBeDefined();
            expect(typeof scanner.scan == 'function').toBe(true);
        });

        it("should contain an encode function", function() {
            expect(scanner.encode).toBeDefined();
            expect(typeof scanner.encode == 'function').toBe(true);
        });

        it("should contain three DestinationType constants", function() {
            expect(scanner.Encode.TEXT_TYPE).toBe("TEXT_TYPE");
            expect(scanner.Encode.EMAIL_TYPE).toBe("EMAIL_TYPE");
            expect(scanner.Encode.PHONE_TYPE).toBe("PHONE_TYPE");
            expect(scanner.Encode.SMS_TYPE).toBe("SMS_TYPE");
        });
        
    });
}
