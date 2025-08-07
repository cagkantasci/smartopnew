// ignore: unused_import
import 'package:intl/intl.dart' as intl;
import 'app_localizations.dart';

// ignore_for_file: type=lint

/// The translations for English (`en`).
class AppLocalizationsEn extends AppLocalizations {
  AppLocalizationsEn([String locale = 'en']) : super(locale);

  @override
  String get appTitle => 'Machine Check SaaS';
  @override
  String get dashboardTitle => 'Dashboard';
  @override
  String get welcomeMessage => 'Welcome to Machine Check SaaS!';
  @override
  String get language => 'Language';
  @override
  String get logout => 'Logout';
  @override
  String get equipmentListTitle => 'Equipment List';
  @override
  String get errorGettingData => 'Error getting data';
  @override
  String get noEquipmentFound => 'No equipment found.';
  @override
  String get unnamedEquipment => 'Unnamed Equipment';
  @override
  String get equipmentId => 'ID';
  @override
  String get equipmentPlate => 'Plate';
  @override
  String get success => 'Success';
  @override
  String get error => 'Error';
  @override
  String get maintenanceAdded => 'Maintenance record added';
  @override
  String get notificationSent => 'Notification sent';
  @override
  String get reportsTitle => 'Reports';
  @override
  String get noReportsFound => 'No reports found.';
  @override
  String get unnamedReport => 'Unnamed Report';
  @override
  String get reportStatus => 'Status';
}
