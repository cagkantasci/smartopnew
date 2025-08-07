import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'l10n/app_localizations.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  Locale _locale = const Locale('tr');

  void _changeLanguage(Locale locale) {
    setState(() {
      _locale = locale;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Machine Check SaaS',
      theme: ThemeData(primarySwatch: Colors.blue),
      localizationsDelegates: const [
        AppLocalizations.delegate,
        GlobalMaterialLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
        GlobalCupertinoLocalizations.delegate,
      ],
      supportedLocales: const [
        Locale('en'),
        Locale('tr'),
      ],
      locale: _locale,
      home: LoginScreen(onLanguageChange: _changeLanguage),
    );
  }
}

class LoginScreen extends StatelessWidget {
  final void Function(Locale)? onLanguageChange;
  const LoginScreen({super.key, this.onLanguageChange});

  @override
  Widget build(BuildContext context) {
    final loc = AppLocalizations.of(context)!;
    return Scaffold(
      appBar: AppBar(
        title: Text(loc.dashboardTitle),
        actions: [
          IconButton(
            icon: const Icon(Icons.logout),
            tooltip: loc.logout,
            onPressed: () {
              ScaffoldMessenger.of(context).showSnackBar(
                SnackBar(content: Text(loc.logout)),
              );
            },
          ),
          DropdownButtonHideUnderline(
            child: DropdownButton<Locale>(
              value: Localizations.localeOf(context),
              icon: const Icon(Icons.language, color: Colors.white),
              dropdownColor: Colors.blue,
              items: const [
                DropdownMenuItem(
                  value: Locale('tr'),
                  child: Text('Türkçe'),
                ),
                DropdownMenuItem(
                  value: Locale('en'),
                  child: Text('English'),
                ),
              ],
              onChanged: (locale) {
                if (onLanguageChange != null && locale != null) {
                  onLanguageChange!(locale);
                }
              },
            ),
          ),
        ],
      ),
      body: Center(child: Text(loc.welcomeMessage)),
    );
  }
}
