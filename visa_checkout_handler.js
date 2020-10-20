function onVisaCheckoutReady() {
        V.init( {
        apikey: "BI4LGN8G4Z8VB2IFG2Z021m1Lyg1ROGb-421912OMY0EbPZXY",
        encryptionKey: "1QGJTPY55V3B2F277MCJ13rl07_0jX6agSmRn3ershVRukVSg",
        paymentRequest: {
            currencyCode: "USD",
            subtotal: "10.00"
        }
        });
        V.on("payment.success", function(payment) {
        document.write("payment.success: \n" + JSON.stringify(payment));
        });
        V.on("payment.cancel", function(payment) {
        document.write("payment.cancel: \n" + JSON.stringify(payment));
        });
        V.on("payment.error", function(payment, error) {
        document.write("payment.error: \n" +
        JSON.stringify(payment) + "\n" +
        JSON.stringify(error));
        });
        }