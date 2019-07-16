$(function() {
    const options = new cast.framework.CastReceiverOptions();
    options.disableIdleTimeout = true;

    const context = cast.framework.CastReceiverContext.getInstance();
    context.addCustomMessageListener('urn:x-cast:com.example.castdata', function(customEvent) {
        if(customEvent.data.type == "message") {
            $("#message").append(customEvent.senderId + " -> " + customEvent.data.text + "</br></br>");
        }
    });
    context.start(options);
});