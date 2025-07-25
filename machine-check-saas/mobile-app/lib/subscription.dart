import 'package:flutter/material.dart';
import 'api_service.dart';

class SubscriptionScreen extends StatefulWidget {
  const SubscriptionScreen({super.key});

  @override
  State<SubscriptionScreen> createState() => _SubscriptionScreenState();
}

class _SubscriptionScreenState extends State<SubscriptionScreen> {
  final _companyController = TextEditingController();
  String? result;
  bool loading = false;

  Future<void> startSubscription() async {
    setState(() { loading = true; result = null; });
    try {
      final Map<String, dynamic> subscriptionData = {
        'company': _companyController.text,
        'startDate': DateTime.now().toIso8601String(),
      };
      final res = await ApiService.startSubscription(subscriptionData);
      setState(() { result = 'Başarılı: ${res['message'] ?? 'Abonelik başlatıldı'}'; });
    } catch (e) {
      setState(() { result = 'Hata: $e'; });
    } finally {
      setState(() { loading = false; });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Abonelik Başlat')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            TextField(
              controller: _companyController,
              decoration: const InputDecoration(labelText: 'Firma Adı'),
            ),
            const SizedBox(height: 16),
            ElevatedButton(
              onPressed: loading ? null : startSubscription,
              child: loading ? const CircularProgressIndicator() : const Text('Abonelik Başlat'),
            ),
            if (result != null) ...[
              const SizedBox(height: 16),
              Text(result!, style: TextStyle(color: result!.startsWith('Hata') ? Colors.red : Colors.green)),
            ],
          ],
        ),
      ),
    );
  }
}
