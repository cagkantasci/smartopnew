import 'package:http/http.dart' as http;
import 'dart:convert';

class ApiService {
  static const String baseUrl = 'http://localhost:5000/api';

  static Future<List<dynamic>> getEquipments() async {
    final response = await http.get(Uri.parse('$baseUrl/equipment'));
    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Makine verisi alınamadı');
    }
  }

  static Future<List<dynamic>> getReports() async {
    final response = await http.get(Uri.parse('$baseUrl/report'));
    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Rapor verisi alınamadı');
    }
  }

  static Future<List<dynamic>> getChecklists() async {
    final response = await http.get(Uri.parse('$baseUrl/checklist'));
    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Kontrol listesi verisi alınamadı');
    }
  }

  static Future<Map<String, dynamic>> sendNotification(
      String token, String title, String body) async {
    final response = await http.post(
      Uri.parse('$baseUrl/notification/send'),
      headers: {'Content-Type': 'application/json'},
      body: json.encode({'token': token, 'title': title, 'body': body}),
    );
    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Bildirim gönderilemedi');
    }
  }

  // Kullanıcı girişi
  static Future<Map<String, dynamic>> login(
      String email, String password) async {
    final response = await http.post(
      Uri.parse('$baseUrl/auth/login'),
      headers: {'Content-Type': 'application/json'},
      body: json.encode({'email': email, 'password': password}),
    );
    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Giriş başarısız');
    }
  }

  // Rapor oluşturma
  static Future<Map<String, dynamic>> createReport(
      Map<String, dynamic> reportData) async {
    final response = await http.post(
      Uri.parse('$baseUrl/report'),
      headers: {'Content-Type': 'application/json'},
      body: json.encode(reportData),
    );
    if (response.statusCode == 201) {
      return json.decode(response.body);
    } else {
      throw Exception('Rapor oluşturulamadı');
    }
  }

  // Ekipman ekleme
  static Future<Map<String, dynamic>> addEquipment(
      Map<String, dynamic> equipmentData) async {
    final response = await http.post(
      Uri.parse('$baseUrl/equipment'),
      headers: {'Content-Type': 'application/json'},
      body: json.encode(equipmentData),
    );
    if (response.statusCode == 201) {
      return json.decode(response.body);
    } else {
      throw Exception('Ekipman eklenemedi');
    }
  }

  // Checklist ekleme
  static Future<Map<String, dynamic>> addChecklist(
      Map<String, dynamic> checklistData) async {
    final response = await http.post(
      Uri.parse('$baseUrl/checklist'),
      headers: {'Content-Type': 'application/json'},
      body: json.encode(checklistData),
    );
    if (response.statusCode == 201) {
      return json.decode(response.body);
    } else {
      throw Exception('Checklist eklenemedi');
    }
  }

  // Offline veri gönderme
  static Future<Map<String, dynamic>> sendOfflineData(
      Map<String, dynamic> offlineData) async {
    final response = await http.post(
      Uri.parse('$baseUrl/offline/sync'),
      headers: {'Content-Type': 'application/json'},
      body: json.encode(offlineData),
    );
    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Offline veri gönderilemedi');
    }
  }

  // QR kod okuma
  static Future<Map<String, dynamic>> readQr(String qrCode) async {
    final response = await http.post(
      Uri.parse('$baseUrl/qr/read'),
      headers: {'Content-Type': 'application/json'},
      body: json.encode({'qr': qrCode}),
    );
    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('QR kod okunamadı');
    }
  }

  // Bakım kaydı ekleme
  static Future<Map<String, dynamic>> addMaintenance(
      Map<String, dynamic> maintenanceData) async {
    final response = await http.post(
      Uri.parse('$baseUrl/maintenance'),
      headers: {'Content-Type': 'application/json'},
      body: json.encode(maintenanceData),
    );
    if (response.statusCode == 201) {
      return json.decode(response.body);
    } else {
      throw Exception('Bakım kaydı eklenemedi');
    }
  }

  // Abonelik başlatma
  static Future<Map<String, dynamic>> startSubscription(
      Map<String, dynamic> subscriptionData) async {
    final response = await http.post(
      Uri.parse('$baseUrl/subscription/start'),
      headers: {'Content-Type': 'application/json'},
      body: json.encode(subscriptionData),
    );
    if (response.statusCode == 201) {
      return json.decode(response.body);
    } else {
      throw Exception('Abonelik başlatılamadı');
    }
  }

  // AI tahmin fonksiyonu
  static Future<Map<String, dynamic>> getAIPrediction(
      Map<String, dynamic> inputData) async {
    final response = await http.post(
      Uri.parse('$baseUrl/ai/predict'),
      headers: {'Content-Type': 'application/json'},
      body: json.encode(inputData),
    );
    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('AI tahmini alınamadı');
    }
  }
}
