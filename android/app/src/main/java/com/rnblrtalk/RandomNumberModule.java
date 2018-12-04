package com.rnblrtalk;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class RandomNumberModule extends ReactContextBaseJavaModule {

    public RandomNumberModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void getRandomNumber(int min, int max, Callback successCallback) {
        int randomNumber = SuperComplexRandomNumber.getRandomNumber(min, max);
        successCallback.invoke(randomNumber);
    }

    @Override
    public String getName() {
        return "SuperComplexRandomNumber";
    }
}