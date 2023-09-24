// checking only numbers in input
import React from 'react';

export const handleOnlyNumbers = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
) => {
    let { value } = event.target;
    value = value.replace(/[^\d.]/g, '');
    value = value.replace(/\.(?=.*\.)/g, '');
    // eslint-disable-next-line no-param-reassign
    event.target.value = value;
};

const isValidURL = (url: string) => {
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlPattern.test(url);
};
// checking valid url and only url in input
export const handleOnlyUrl = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
) => {
    const { value } = event.target;
    const isValidUrl = isValidURL(value);
    // eslint-disable-next-line no-param-reassign
    event.target.value = isValidUrl ? value : '';
};
// checking only words in input
export const handleOnlyWords = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
) => {
    const { value } = event.target;
    const textOnlyValue = value.replace(/[^a-zA-Z\s]/g, '');
    // eslint-disable-next-line no-param-reassign
    event.target.value = textOnlyValue;
};
