// ignore: unused_import
import 'package:intl/intl.dart' as intl;
import 'app_localizations.dart';

// ignore_for_file: type=lint

/// The translations for Turkish (`tr`).
class AppLocalizationsTr extends AppLocalizations {
  AppLocalizationsTr([String locale = 'tr']) : super(locale);

  @override
  String get appTitle => 'Makine Kontrol SaaS';
  @override
  String get dashboardTitle => 'Ana Sayfa';
  @override
  String get welcomeMessage => 'Makine Kontrol SaaS\'a Hoşgeldiniz!';
  @override
  String get language => 'Dil';
  @override
  String get logout => 'Çıkış Yap';
  @override
  String get equipmentListTitle => 'Makine Listesi';
  @override
  String get errorGettingData => 'Veri alınırken hata oluştu';
  @override
  String get noEquipmentFound => 'Hiç makine bulunamadı.';
  @override
  String get unnamedEquipment => 'İsimsiz Makine';
  @override
  String get equipmentId => 'ID';
  @override
  String get equipmentPlate => 'Plaka';
  @override
  String get success => 'Başarılı';
  @override
  String get error => 'Hata';
  @override
  String get maintenanceAdded => 'Bakım kaydı eklendi';
  @override
  String get notificationSent => 'Bildirim gönderildi';
  @override
  String get reportsTitle => 'Raporlar';
  @override
  String get noReportsFound => 'Rapor bulunamadı';
  @override
  String get unnamedReport => 'İsimsiz Rapor';
  @override
  String get reportStatus => 'Durum';
}
