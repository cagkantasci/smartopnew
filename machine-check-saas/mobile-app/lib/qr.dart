import 'package:flutter/material.dart';
import 'api_service.dart';

class QrScreen extends StatefulWidget {
  const QrScreen({super.key});

  @override
  State<QrScreen> createState() => _QrScreenState();
}

class _QrScreenState extends State<QrScreen> {
  final _qrController = TextEditingController();
  String? result;
  bool loading = false;

  Future<void> readQr() async {
    setState(() {
      loading = true;
      result = null;
    });
    try {
      final res = await ApiService.readQr(_qrController.text);
      setState(() {
        result = 'Başarılı: ${res['data'] ?? 'QR okundu'}';
      });
    } catch (e) {
      setState(() {
        result = 'Hata: $e';
      });
    } finally {
      setState(() {
        loading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('QR Kod Okuma')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            TextField(
              controller: _qrController,
              decoration: const InputDecoration(labelText: 'QR Kod'),
            ),
            const SizedBox(height: 16),
            ElevatedButton(
              onPressed: loading ? null : readQr,
              child: loading
                  ? const CircularProgressIndicator()
                  : const Text('QR Oku'),
            ),
            if (result != null) ...[
              const SizedBox(height: 16),
              Text(result!,
                  style: TextStyle(
                      color: result!.startsWith('Hata')
                          ? Colors.red
                          : Colors.green)),
            ],
          ],
        ),
      ),
    );
  }
}
