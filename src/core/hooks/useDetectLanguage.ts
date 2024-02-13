function useDetectLanguage() {
    const detectLanguage = () => {
        const language = navigator.language.split(/[-_]/)[0];
        return language;
    };

    return detectLanguage();
}

export { useDetectLanguage };