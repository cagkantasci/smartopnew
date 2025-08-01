import 'package:flutter/material.dart';
import 'api_service.dart';

class AIScreen extends StatefulWidget {
  const AIScreen({super.key});

  @override
  State<AIScreen> createState() => _AIScreenState();
}

class _AIScreenState extends State<AIScreen> {
  final _inputController = TextEditingController();
  String? result;
  bool loading = false;

  Future<void> getPrediction() async {
    setState(() {
      loading = true;
      result = null;
    });
    try {
      final Map<String, dynamic> inputData = {
        'input': _inputController.text,
      };
      final res = await ApiService.getAIPrediction(inputData);
      setState(() {
        result = 'Tahmin: ${res['prediction'] ?? 'Sonuç alınamadı'}';
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
      appBar: AppBar(title: const Text('AI Tahmin')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            TextField(
              controller: _inputController,
              decoration: const InputDecoration(labelText: 'Tahmin için veri'),
              minLines: 2,
              maxLines: 5,
            ),
            const SizedBox(height: 16),
            ElevatedButton(
              onPressed: loading ? null : getPrediction,
              child: loading
                  ? const CircularProgressIndicator()
                  : const Text('Tahmin Al'),
            ),
            if (result != null) ...[
              const SizedBox(height: 16),
              Text(result!,
                  style: TextStyle(
                      color: result!.startsWith('Hata')
                          ? Colors.red
                          : Colors.blue)),
            ],
          ],
        ),
      ),
    );
  }
}
