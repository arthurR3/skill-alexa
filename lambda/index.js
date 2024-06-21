/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Bienvenido a la Calculadora Arthur. ¿Quieres hacer una operación?... solo di Cuanto es 5 mas 5';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Hello World!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

/* SumaIntent */
const SumaIntentHandler = {
    canHandle(handlerInput){
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SumaIntent';
    },
    handle(handlerInput){
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const cantidad = handlerInput.requestEnvelope.request.intent.slots.numUno.value;
        const cantidadd = handlerInput.requestEnvelope.request.intent.slots.numDos.value;
        var num1 = Number(cantidad);
        var num2 = Number(cantidadd);
        
        if(isNaN(num1) || isNaN(num2)){
            return handlerInput.responseBuilder
            .speak('Lo siento, no puedo entender los números. Por favor, inténtalo de nuevo.')
        }
        let resultado = 0;
        resultado = num1 + num2;
        
        const speakOutput = `Calculadora Arthur... El resultado de la suma de ${num1} más ${num2} es igual a ${resultado}`;
        return handlerInput.responseBuilder
        .speak(speakOutput)
        .getResponse();
    }
}
/******************************************************************************/

/* RestaIntent */
const RestaIntentHandler = {
    canHandle(handlerInput){
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'RestaIntent';
    },
    handle(handlerInput){
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const cantidad = handlerInput.requestEnvelope.request.intent.slots.numUno.value;
        const cantidadd = handlerInput.requestEnvelope.request.intent.slots.numDos.value;
        var num1 = Number(cantidad);
        var num2 = Number(cantidadd);
        
        if(isNaN(num1) || isNaN(num2)){
            return handlerInput.responseBuilder
            .speak('Lo siento, no puedo entender los números. Por favor, inténtalo de nuevo.')
        }
        let resultado = 0;
        resultado = num1 - num2;
        
        const speakOutput = `Calculadora Arthur... El resultado de la resta de ${num1} menos ${num2} es igual a ${resultado}`;
        return handlerInput.responseBuilder
        .speak(speakOutput)
        .getResponse();
    }
}
/********************************************************************/

/* MultiplicacionIntent */
const MultiplicacionIntentHandler = {
    canHandle(handlerInput){
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MultiplicacionIntent';
    },
    handle(handlerInput){
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const cantidad = handlerInput.requestEnvelope.request.intent.slots.numUno.value;
        const cantidadd = handlerInput.requestEnvelope.request.intent.slots.numDos.value;
        var num1 = Number(cantidad);
        var num2 = Number(cantidadd);
        
        if(isNaN(num1) || isNaN(num2)){
            return handlerInput.responseBuilder
            .speak('Lo siento, no puedo entender los números. Por favor, inténtalo de nuevo.')
        }
        let resultado = 0;
        resultado = num1 * num2;
        
        const speakOutput = `Calculadora Arthur... El resultado de la multiplicación de ${num1} por ${num2} es igual a ${resultado}`;
        return handlerInput.responseBuilder
        .speak(speakOutput)
        .getResponse();
    }
}
/***********************************************************************/

/* DivisionIntent */
const DivisionIntentHandler = {
    canHandle(handlerInput){
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DivisionIntent';
    },
    handle(handlerInput){
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const cantidad = handlerInput.requestEnvelope.request.intent.slots.numUno.value;
        const cantidadd = handlerInput.requestEnvelope.request.intent.slots.numDos.value;
        var num1 = Number(cantidad);
        var num2 = Number(cantidadd);
        
        if(isNaN(num1) || isNaN(num2)){
            return handlerInput.responseBuilder
            .speak('Lo siento, no puedo entender los números. Por favor, inténtalo de nuevo.')
        }
        if(num2 === 0){
            return handlerInput.responseBuilder
            .speak('Lo siento, no se puede dividir entre 0. Inténtalo de nuevo.')
        }
        let resultado = 0;
        resultado = num1 / num2;
        
        const speakOutput =`Calculadora Arthur... El resultado de la división de ${num1} entre ${num2} es igual a ${resultado}`;
        return handlerInput.responseBuilder
        .speak(speakOutput)
        .getResponse();
    }
}
/***********************************************************************/
const PotenciaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PotenciaIntent';
    },
    handle(handlerInput){
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const cantidad = handlerInput.requestEnvelope.request.intent.slots.numUno.value;
        const cantidadd = handlerInput.requestEnvelope.request.intent.slots.numDos.value;
        var num1 = Number(cantidad);
        var num2 = Number(cantidadd);
        
        if(isNaN(num1) || isNaN(num2)) {
            return handlerInput.responseBuilder
            .speak('Lo siento, no puedo entender los números. Por favor, inténtalo de nuevo.');
        }
        
        let resultado = 0;
        resultado = Math.pow(num1, num2);
        
        const speakOutput =`Calculadora Arthur... El resultado de ${num1} a la potencia de ${num2} es igual a ${resultado}`;
        return handlerInput.responseBuilder
        .speak(speakOutput)
        .getResponse();   
    }
};

const RaizIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'RaizCuadradaIntent';
    },
    handle(handlerInput){
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const cantidad = handlerInput.requestEnvelope.request.intent.slots.numUno.value;
        var num1 = Number(cantidad);

        if(isNaN(num1)) {
            return handlerInput.responseBuilder
            .speak('Lo siento, no puedo entender los números. Por favor, inténtalo de nuevo.');
        }
        
        let resultado = 0;
        resultado = Math.sqrt(num1);
        
        const speakOutput =`Calculadora Arthur... El resultado de la raíz cuadrada de ${num1} es ${resultado}`;
        return handlerInput.responseBuilder
        .speak(speakOutput)
        .getResponse();   
    }
    
}

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        SumaIntentHandler,
        RestaIntentHandler,
        MultiplicacionIntentHandler,
        DivisionIntentHandler,
        PotenciaIntentHandler,
        RaizIntentHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();