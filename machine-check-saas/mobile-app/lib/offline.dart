import 'package:flutter/material.dart';
import 'api_service.dart';

class OfflineSyncScreen extends StatefulWidget {
  const OfflineSyncScreen({super.key});

  @override
  State<OfflineSyncScreen> createState() => _OfflineSyncScreenState();
}

class _OfflineSyncScreenState extends State<OfflineSyncScreen> {
  final _dataController = TextEditingController();
  String? result;
  bool loading = false;

  Future<void> sendOfflineData() async {
    setState(() {
      loading = true;
      result = null;
    });
    try {
      final Map<String, dynamic> offlineData = {
        'data': _dataController.text,
        'timestamp': DateTime.now().toIso8601String(),
      };
      final res = await ApiService.sendOfflineData(offlineData);
      setState(() {
        result = 'Başarılı: ${res['message'] ?? 'Veri senkronize edildi'}';
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
      appBar: AppBar(title: const Text('Offline Veri Senkronizasyonu')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            TextField(
              controller: _dataController,
              decoration: const InputDecoration(labelText: 'Offline Veri'),
              minLines: 2,
              maxLines: 5,
            ),
            const SizedBox(height: 16),
            ElevatedButton(
              onPressed: loading ? null : sendOfflineData,
              child: loading
                  ? const CircularProgressIndicator()
                  : const Text('Veriyi Gönder'),
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
