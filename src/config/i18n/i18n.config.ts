import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  // debug: true,
  resources: {
    en: {
      translation: {
        '-': '-',
        confirm: 'Confirm',
        send: 'Send',
        country: 'Country',
        countries: 'countries',
        relationship: 'relationship',
        cordially: 'Cordially',
        continue: 'Continue',
        sign_in: 'Log In',
        important_information: 'IMPORTANT INFORMATION',
        sign_up: 'Sign Up',
        logout: 'logout',
        detail: 'detail',
        back_to_login: 'Back to Log In',
        back_button: 'Back',
        see_others: 'See more opportunities',
        cancel: 'Cancel',
        settings: 'Settings',
        account: 'Account',
        setup: 'Set Up',
        save: 'Save',
        select_country: 'Select your country',
        defaut_fail: 'impossible to complete now, try in a moment.',
        permission_external_storage: {
          title: 'Permission is required',
          description: 'Storage permission is required',
        },
        config: {
          error_change_notification:
            'The configuration could not be changed now',
        },
        confidential: {
          pdf: 'CONFIDENTIAL: This document is provided for the exclusive use of',
        },
        validation: {
          email: 'email required',
          required: 'field required',
          phone: 'invalid phone number. ex: +1 855-419-6348',
          min: 'minimum of {{min}} characters',
          password: 'password is required',
          confirmation: 'password does not match',
        },
        home: {
          notFoundFunds: "You don't have funds yet",
        },
        schedule: {
          title: 'We would enjoy speaking to you directly!',
          description_title: 'We would enjoy speaking to you directly!',
          scheduleMeeting: 'Schedule a Call',
          notNow: 'Not Now',
          youDontHaveAnyInvest: 'You don’t have any investment',
          bestDayToMeet:
            'Tell us the best day in your schedule for us to connect.',
          finish: {
            title1: 'Thanks for interest.',
            title2: 'We already have a call scheduled.',
            description:
              'Our Investor Relations team will get back to you soon.',
          },
        },
        opportunitie: {
          interest_confirmation: 'Notification sent',
          someone_contact: 'A Leste professional will contact you soon.',
          go_my: 'Go to my opportunities',
          defaut_fail: 'some problem in opportunities',
          interest_fail_title: 'Excuse me!',
          interest_fail_description: 'We had a small mistake. Please try again',
        },
        recovery: {
          password: {
            title: 'Enter a new password',
            password: 'New Password',
            confirm: 'Confirm new password',
            password_old: 'Current Password',
          },
          code: {
            title: 'A security code has been sent to your email',
            subtitle: 'Enter security code',
            resend_code: 'resend code',
            invalid_code:
              'Your code is invalid, check your email or resend again',
          },
          form: {
            title: 'Recover your password',
            subtitle: 'Enter your email',
          },
          feedback: {
            title: 'Password recovery requested',
            subtitle:
              'You will receive instructions on how to regain access to your account via email.',
          },
          success: {
            title: 'Password is changed',
          },
          finish: {
            title: 'Thank you for your interest in our services!',
            description: 'We have sent a confirmation link to your email.',
          },
        },
        interest: {
          default_fail: 'try again in a moment',
        },
        logoutScreen: {
          title: 'EXCELLENCE',
          description:
            'We are determined to deliver performance with quality, efficiency and well-defined procedures. We recognize that everything can be improved, including ourselves, threfore we are in constant pursuit of the best',
        },
        signin: {
          defaut_fail: 'some problem in your signin',
          unauthorized_client: 'user or password is invalid',
          invalid_client: 'user or password is invalid',
        },
        settings_screen: {
          account: {
            attach_document: 'Attach identification document',
          },
          setup: {
            notification_new_product: 'Notify when you have a new product',
            use_biometrics: 'Use biometric or Face ID',
            use_notifications: 'Enable notifications',
          },
        },
        about: {
          header: 'About Leste',
          p1: 'Leste Group is a market-leading alternative investments platform focused on delivering consistent and superior risk-adjusted returns for our investors. Our bespoke investment solutions span the globe and utilize a wide range of strategies covering public markets, private equity, real estate, structured credit, and litigation finance.',
          p2: 'Our purpose is to generate value for our investors through high-performance investment management in liquid and illiquid assets, with a rigorous risk management process.',
        },
        contact: {
          header: 'Contact Us',
          mail: 'investors@leste.com',
          miami: {
            phone: '+1 305 929-9200',
            address: '1450 Brickell Avenue, Suite 2600, FL, 33131',
          },
          london: {
            phone: '+44 203 931 4771',
            address: '1/F, 10 Gess Court, UK - W1U 1JJ',
          },
          'rio de janeiro': {
            phone: '+55 21 2123-2150',
            address: 'Rua Dias Ferreira 190, 6º andar - Leblon, Brazil',
          },
          'sao paulo': {
            phone: '+55 11 2104-6860',
            address:
              'Av. Brigadeiro Faria Lima, 2277 Cj 302 - Jardim Paulistano, Brazil',
          },
          'bogota': {
            phone: '+57 312 433-55870',
            address:
              '',
          },
        },
        welcome: {
          step1: {
            title: 'BE THE FIRST TO KNOW ABOUT NEW INVESTMENT OPPORTUNITIES',
            p1: "Leste's alternative investments platform is constantly seeking sophisticated and unique opportunities with compelling risk / reward characteristics for our clients.",
          },
          step2: {
            title: 'SHOW INTEREST',
            p1: "Review Leste's active offerings and select the opportunites you want to explore.",
          },
          step3: {
            title: 'SPEAK WITH LESTE',
            p1: 'After selecting the opportunities that are best for you, speak with a Leste professional to learn more.',
          },
        },
        signup: {
          defaut_fail: 'some problem in your sign up',
          welcome: {
            page1: {
              title: "Welcome to Leste's Alternative Investments Platform",
              p1: "First, we'd like to ensure that you are eligible to view Leste's investment offerings.",
              p2: 'Help us determine your status as an eligible investor for our strategies by completing a short questionnaire. Once eligibility has been confirmed, we will be able to share more information.',
            },
          },
          finish: {
            title: 'Thanks for registering!',
            p1: 'Our Investor Relations team will contact you shortly.',
            p2: 'After your registration is approved, we will provide you a password to access your account.',
            description:
              'After confirming your eligibility, Leste’s Investor Relations team will provide you with access to our Alternative Investments Platform.',
            description2:
              'Our Investor Relations team will get back to you soon.',
          },
          cancel: {
            title: 'Cancel your sign up?',
            description: 'You will lose the information filled in',
          },
          form: {
            title: 'Personal Information',
            provide_contact:
              "Please provide your contact's name at Leste Group:",
            indicate:
              'Should you indicate that you have a previous relationship with Leste Group, someone from our team will validate that relationship internally. Once completed, you will be granted access to the app.',
            previous_relationship:
              'Do you have an existing relationship with Leste Group?',
          },
          none_options: 'None of the above',
          step0: {
            question: 'Are you a US-based investor?',
            0: 'U.S.',
            1: 'Non-U.S.',
          },
          step1: {
            question: 'How do you invest today?',
            0: 'As a Natural Person',
            1: 'As a “Corporation”, Foundation, Endowment, Company, or LLC',
            2: 'As a Trust, Bank, Savings and Loan (or similar institution) or Insurance Company',
            3: 'Via an Employee Benefit Plan, Individual Retirement Account, or Keogh Plan',
            4: 'I am NOT an Accredited Investor',
          },
          step2: {
            question: 'Please select all options that apply.',
            0: {
              0: 'Investor has a net worth (either alone or with a spouse) that exceeds $1 million (excluding the value of investor’s primary residence).',
              1: 'Investor had income exceeding $200,000 individually (or exceeding $300,000 jointly with a spouse) in each of the past two years & reasonably expects to reach the same income this year.',
            },
            1: {
              0: 'Investor has total assets of more than $5 million.',
              1: "All of investor's equity owners are accredited investors.",
            },
            2: {
              0: 'Investor has total assets of more than $5 million & is directed by sophiscated person',
              1: 'Investor is a revocable trust which may be amended or revoked at any time & all of the grantors are accredited investors',
              2: 'Investor is a bank as defined in Section 3(a)(2) of the U.S Securities Act of 1933, as amended (the “Securities Act”), a savings & loan association, or other institution as defined in Section 3(a)(5)(A) of the Securities Act, & is acting in a fiduciary capacity on behalf of a trust account or accounts.',
              3: 'Investor in a bank as defined in the Securities Act, a savings and loan association, or other institution as defined in Section 3(a)(5)(A) of the Securities Act, and  acting in its individual capacity.',
              4: 'Investor in an insurance company as defined in Section 2(a)(13) of the Securities Act.',
            },
            3: {
              0: 'The Investor is in an employee benefit plan that falls within the meaning of the Employee Retirement Income Security Act of 1974, as amended (“ERISA”), & any decision to invest will be made by a plan fiduciary (as defined in Section 3(21) of ERISA).',
              1: 'The Investor has total assets in excess of $5 million & is (i) in an employee benefit plan within the meaning of ERISA or (ii) in a plan maintained by or on behalf of a state for the benefit of its employees.',
              2: 'The Investor is in an individual retirement account, Keogh Plan, or other self-directed plan in which all of the participant(s) are accredited investors.',
            },
          },
          feedback: {
            title: 'Thank you.',
            p1: 'The investments that we undertake may not be suitable for all investors.',
            p2: 'US regulations and our fiduciary standards require us to ensure that you are a qualified candidate for such investments as defined by the Accredited Investor Act.',
          },
        },
        theme: {
          light: 'light',
          dark: 'dark',
        },
        language: {
          english: 'english',
          portuguese: 'portuguese',
        },
      },
    },
    pt_br: {
      translation: {
        detail: 'detalhe',
        back_button: 'Voltar',
        auth: {
          signin: 'Entrar',
          signup: 'Registrar',
          logout: 'Sair',
        },
        home: {
          notFoundFunds: 'Você ainda não possui fundos',
        },
        schedule: {
          title: 'We would enjoy speaking to you directly!',
          description_title: 'We would enjoy speaking to you directly!',
          scheduleMeeting: 'Agendar uma reunião',
          notNow: 'Agora não',
          youDontHaveAnyInvest: 'Você não possui investimentos',
          bestDayToMeet:
            'Diga-nos o melhor dia da sua agenda para nos encontrarmos.',
          finish: {
            title1: 'Agradecemos o interesse.',
            title2: 'Já temos uma reunião agendada.',
            description:
              'Nossa equipe de Relações com Investidores entrará em contato com você em breve.',
          },
        },
        theme: {
          light: 'claro',
          dark: 'escuro',
        },
        language: {
          english: 'inglês',
          portuguese: 'português',
        },
      },
    },
  },
});

export function changeLanguage(lng: string) {
  i18next.changeLanguage(lng);
}
