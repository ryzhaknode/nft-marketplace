// checking only numbers in input
import React from 'react';

export const handleOnlyNumbers = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let { value } = event.target;
    value = value.replace(/[^\d.]/g, '');
    value = value.replace(/\.(?=.*\.)/g, '');
    event.target.value = value;
};

// checking valid url and only url in input
export const handleOnlyUrl = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = event.target;
    const isValidUrl = isValidURL(value);
    event.target.value = isValidUrl ? value : '';
};
const isValidURL = (url: string) => {
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlPattern.test(url);
};
// checking only words in input
export const handleOnlyWords = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = event.target;
    const textOnlyValue = value.replace(/[^a-zA-Z\s]/g, '');
    event.target.value = textOnlyValue;
};
