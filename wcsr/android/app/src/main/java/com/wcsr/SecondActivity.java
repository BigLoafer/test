package com.wcsr;

import android.os.Bundle;

import com.facebook.react.ReactActivity;

import javax.annotation.Nullable;

public class SecondActivity extends ReactActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Nullable
    @Override
    protected String getMainComponentName() {
        return "second";
    }
}