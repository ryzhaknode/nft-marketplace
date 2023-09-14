export const useConnectWallet = (changeState: Function) => {
    const connectWallet = () => {
        if (window.ethereum) {
            window.ethereum
                .request({ method: 'eth_requestAccounts' })
                .then((account: any) => {
                    changeState(account[0]);
                });
            window.ethereum.on('accountChanged', connectWallet);
            window.ethereum.on('chainChanged', chainChangedHandler);
        } else {
            alert('install metamask');
        }
    };
    return [connectWallet];
};

const chainChangedHandler = () => {
    window.location.reload();
};
