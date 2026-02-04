import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
type Language = 'en' | 'es' | 'fr' | 'de' | 'zh' | 'ar' | 'hi' | 'ta';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.healthcare': 'Healthcare',
    'nav.mental': 'Mental Health',
    'nav.info': 'Info Hub',
    'nav.community': 'Community',
    'nav.login': 'Sign In',
    'hero.title': 'Stay Safe, Stay Connected',
    'hero.subtitle': 'Your comprehensive toolkit for navigating health crises with confidence',
    'hero.cta': 'Get Started',
    'hero.learn': 'Learn More',
    'stats.cases': 'Active Cases',
    'stats.vaccinated': 'Vaccinated',
    'stats.recovered': 'Recovered',
    'stats.resources': 'Resources Available',
    'features.healthcare': 'Healthcare Resources',
    'features.healthcare.desc': 'Find facilities, telemedicine, symptom checkers, and vaccination scheduling',
    'features.mental': 'Mental Health Support',
    'features.mental.desc': 'Meditation guides, therapist access, and stress-relief activities',
    'features.info': 'Information Hub',
    'features.info.desc': 'Real-time updates, guidelines, and reliable pandemic resources',
    'features.community': 'Community Connection',
    'features.community.desc': 'Connect with neighbors, offer or request help, share local info',
    'accessibility.title': 'Accessible for Everyone',
    'accessibility.desc': 'Multi-language support, screen reader compatible, and adjustable text sizes',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.healthcare': 'Salud',
    'nav.mental': 'Salud Mental',
    'nav.info': 'Información',
    'nav.community': 'Comunidad',
    'nav.login': 'Iniciar Sesión',
    'hero.title': 'Mantente Seguro, Conectado',
    'hero.subtitle': 'Tu kit completo para navegar crisis de salud con confianza',
    'hero.cta': 'Comenzar',
    'hero.learn': 'Más Info',
    'stats.cases': 'Casos Activos',
    'stats.vaccinated': 'Vacunados',
    'stats.recovered': 'Recuperados',
    'stats.resources': 'Recursos Disponibles',
    'features.healthcare': 'Recursos de Salud',
    'features.healthcare.desc': 'Encuentra centros, telemedicina, y citas de vacunación',
    'features.mental': 'Apoyo de Salud Mental',
    'features.mental.desc': 'Guías de meditación, acceso a terapeutas, actividades anti-estrés',
    'features.info': 'Centro de Información',
    'features.info.desc': 'Actualizaciones en tiempo real, guías y recursos confiables',
    'features.community': 'Conexión Comunitaria',
    'features.community.desc': 'Conecta con vecinos, ofrece o solicita ayuda',
    'accessibility.title': 'Accesible para Todos',
    'accessibility.desc': 'Soporte multilingüe, compatible con lectores de pantalla',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.healthcare': 'Santé',
    'nav.mental': 'Santé Mentale',
    'nav.info': 'Infos',
    'nav.community': 'Communauté',
    'nav.login': 'Connexion',
    'hero.title': 'Restez en Sécurité, Connecté',
    'hero.subtitle': 'Votre boîte à outils complète pour naviguer les crises sanitaires',
    'hero.cta': 'Commencer',
    'hero.learn': 'En Savoir Plus',
    'stats.cases': 'Cas Actifs',
    'stats.vaccinated': 'Vaccinés',
    'stats.recovered': 'Guéris',
    'stats.resources': 'Ressources Disponibles',
    'features.healthcare': 'Ressources Santé',
    'features.healthcare.desc': 'Trouvez des établissements, télémédecine, et rendez-vous vaccins',
    'features.mental': 'Soutien Santé Mentale',
    'features.mental.desc': 'Guides de méditation, accès aux thérapeutes, activités anti-stress',
    'features.info': 'Hub d\'Information',
    'features.info.desc': 'Mises à jour en temps réel, directives et ressources fiables',
    'features.community': 'Connexion Communautaire',
    'features.community.desc': 'Connectez-vous avec vos voisins, offrez ou demandez de l\'aide',
    'accessibility.title': 'Accessible à Tous',
    'accessibility.desc': 'Support multilingue, compatible avec les lecteurs d\'écran',
  },
  de: {
    'nav.home': 'Startseite',
    'nav.healthcare': 'Gesundheit',
    'nav.mental': 'Mental Health',
    'nav.info': 'Info-Hub',
    'nav.community': 'Gemeinschaft',
    'nav.login': 'Anmelden',
    'hero.title': 'Bleiben Sie Sicher, Verbunden',
    'hero.subtitle': 'Ihr umfassendes Toolkit zur Bewältigung von Gesundheitskrisen',
    'hero.cta': 'Loslegen',
    'hero.learn': 'Mehr Erfahren',
    'stats.cases': 'Aktive Fälle',
    'stats.vaccinated': 'Geimpft',
    'stats.recovered': 'Genesen',
    'stats.resources': 'Verfügbare Ressourcen',
    'features.healthcare': 'Gesundheitsressourcen',
    'features.healthcare.desc': 'Finden Sie Einrichtungen, Telemedizin und Impftermine',
    'features.mental': 'Psychische Unterstützung',
    'features.mental.desc': 'Meditationsanleitungen, Therapeuten, Stressabbau-Aktivitäten',
    'features.info': 'Informationszentrum',
    'features.info.desc': 'Echtzeit-Updates, Richtlinien und zuverlässige Ressourcen',
    'features.community': 'Gemeinschaftsverbindung',
    'features.community.desc': 'Verbinden Sie sich mit Nachbarn, bieten oder bitten Sie um Hilfe',
    'accessibility.title': 'Für Alle Zugänglich',
    'accessibility.desc': 'Mehrsprachig, Screenreader-kompatibel, anpassbare Textgrößen',
  },
  zh: {
    'nav.home': '首页',
    'nav.healthcare': '医疗',
    'nav.mental': '心理健康',
    'nav.info': '信息中心',
    'nav.community': '社区',
    'nav.login': '登录',
    'hero.title': '保持安全，保持联系',
    'hero.subtitle': '您应对健康危机的综合工具包',
    'hero.cta': '开始使用',
    'hero.learn': '了解更多',
    'stats.cases': '活跃病例',
    'stats.vaccinated': '已接种',
    'stats.recovered': '已康复',
    'stats.resources': '可用资源',
    'features.healthcare': '医疗资源',
    'features.healthcare.desc': '查找医疗设施、远程医疗和疫苗预约',
    'features.mental': '心理健康支持',
    'features.mental.desc': '冥想指南、治疗师访问、减压活动',
    'features.info': '信息中心',
    'features.info.desc': '实时更新、指南和可靠的疫情资源',
    'features.community': '社区连接',
    'features.community.desc': '与邻居联系，提供或请求帮助',
    'accessibility.title': '人人可用',
    'accessibility.desc': '多语言支持、屏幕阅读器兼容、可调文字大小',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.healthcare': 'الرعاية الصحية',
    'nav.mental': 'الصحة النفسية',
    'nav.info': 'مركز المعلومات',
    'nav.community': 'المجتمع',
    'nav.login': 'تسجيل الدخول',
    'hero.title': 'ابق آمناً، ابق متصلاً',
    'hero.subtitle': 'مجموعة أدواتك الشاملة للتعامل مع الأزمات الصحية',
    'hero.cta': 'ابدأ الآن',
    'hero.learn': 'اعرف المزيد',
    'stats.cases': 'الحالات النشطة',
    'stats.vaccinated': 'تم تطعيمهم',
    'stats.recovered': 'تعافوا',
    'stats.resources': 'الموارد المتاحة',
    'features.healthcare': 'موارد الرعاية الصحية',
    'features.healthcare.desc': 'ابحث عن المرافق والطب عن بعد ومواعيد التطعيم',
    'features.mental': 'دعم الصحة النفسية',
    'features.mental.desc': 'أدلة التأمل، الوصول للمعالجين، أنشطة تخفيف التوتر',
    'features.info': 'مركز المعلومات',
    'features.info.desc': 'تحديثات فورية وإرشادات وموارد موثوقة',
    'features.community': 'التواصل المجتمعي',
    'features.community.desc': 'تواصل مع الجيران، قدم أو اطلب المساعدة',
    'accessibility.title': 'متاح للجميع',
    'accessibility.desc': 'دعم متعدد اللغات، متوافق مع قارئات الشاشة',
  },
  hi: {
    'nav.home': 'होम',
    'nav.healthcare': 'स्वास्थ्य',
    'nav.mental': 'मानसिक स्वास्थ्य',
    'nav.info': 'जानकारी',
    'nav.community': 'समुदाय',
    'nav.login': 'साइन इन',
    'hero.title': 'सुरक्षित रहें, जुड़े रहें',
    'hero.subtitle': 'स्वास्थ्य संकट से निपटने के लिए आपका संपूर्ण टूलकिट',
    'hero.cta': 'शुरू करें',
    'hero.learn': 'और जानें',
    'stats.cases': 'सक्रिय मामले',
    'stats.vaccinated': 'टीकाकृत',
    'stats.recovered': 'स्वस्थ',
    'stats.resources': 'उपलब्ध संसाधन',
    'features.healthcare': 'स्वास्थ्य संसाधन',
    'features.healthcare.desc': 'सुविधाएं, टेलीमेडिसिन और टीकाकरण शेड्यूलिंग खोजें',
    'features.mental': 'मानसिक स्वास्थ्य सहायता',
    'features.mental.desc': 'ध्यान गाइड, थेरेपिस्ट एक्सेस, तनाव-राहत गतिविधियाँ',
    'features.info': 'सूचना केंद्र',
    'features.info.desc': 'रीयल-टाइम अपडेट, दिशानिर्देश और विश्वसनीय संसाधन',
    'features.community': 'सामुदायिक कनेक्शन',
    'features.community.desc': 'पड़ोसियों से जुड़ें, मदद दें या मांगें',
    'accessibility.title': 'सभी के लिए सुलभ',
    'accessibility.desc': 'बहु-भाषा समर्थन, स्क्रीन रीडर संगत',
  },
  ta: {
    'nav.home': 'முகப்பு',
    'nav.healthcare': 'சுகாதாரம்',
    'nav.mental': 'மன நலம்',
    'nav.info': 'தகவல் மையம்',
    'nav.community': 'சமூகம்',
    'nav.login': 'உள்நுழை',
    'hero.title': 'பாதுகாப்பாக இருங்கள், இணைந்திருங்கள்',
    'hero.subtitle': 'சுகாதார நெருக்கடிகளை சமாளிக்க உங்கள் முழுமையான கருவித்தொகுப்பு',
    'hero.cta': 'தொடங்குங்கள்',
    'hero.learn': 'மேலும் அறிய',
    'stats.cases': 'செயலில் உள்ள வழக்குகள்',
    'stats.vaccinated': 'தடுப்பூசி போடப்பட்டவை',
    'stats.recovered': 'குணமானவை',
    'stats.resources': 'கிடைக்கும் வளங்கள்',
    'features.healthcare': 'சுகாதார வளங்கள்',
    'features.healthcare.desc': 'வசதிகள், டெலிமெடிசின் மற்றும் தடுப்பூசி அட்டவணையைக் கண்டறியுங்கள்',
    'features.mental': 'மன நல ஆதரவு',
    'features.mental.desc': 'தியான வழிகாட்டிகள், சிகிச்சையாளர் அணுகல், மன அழுத்த நிவாரண நடவடிக்கைகள்',
    'features.info': 'தகவல் மையம்',
    'features.info.desc': 'நிகழ்நேர புதுப்பிப்புகள், வழிகாட்டுதல்கள் மற்றும் நம்பகமான வளங்கள்',
    'features.community': 'சமூக இணைப்பு',
    'features.community.desc': 'அண்டை வீட்டாருடன் இணையுங்கள், உதவி வழங்குங்கள் அல்லது கேளுங்கள்',
    'accessibility.title': 'அனைவருக்கும் அணுகக்கூடியது',
    'accessibility.desc': 'பல மொழி ஆதரவு, திரை வாசிப்பான் இணக்கமானது',
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('safeguard-theme');
      return (saved as Theme) || 'dark';
    }
    return 'dark';
  });

  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('safeguard-language');
      return (saved as Language) || 'en';
    }
    return 'en';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('safeguard-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('safeguard-language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations['en'][key] || key;
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, language, setLanguage, t }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
