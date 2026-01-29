// 通用的语言检测和切换函数
function detectLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.toLowerCase().split('-')[0];
    const supportedLangs = ['en', 'zh', 'ja', 'ru'];
    return supportedLangs.includes(langCode) ? langCode : 'en';
}

function applyTranslations(translations, lang) {
    const t = translations[lang];
    if (!t) return;
    
    // 更新页面语言属性
    document.documentElement.lang = lang;
    
    // 更新所有带有data-i18n属性的元素
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = t;
        for (const k of keys) {
            value = value[k];
            if (!value) break;
        }
        if (value) {
            if (el.tagName === 'A') {
                if (value.url) el.href = value.url;
                if (value.text) el.textContent = value.text;
            } else {
                el.textContent = value;
            }
        }
    });
    
    // 更新语言按钮状态
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`[onclick="switchLang('${lang}')"]`);
    if (activeBtn) activeBtn.classList.add('active');
    
    // 保存语言偏好
    localStorage.setItem('preferredLanguage', lang);
}
