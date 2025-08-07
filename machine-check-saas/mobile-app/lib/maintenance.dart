import 'package:flutter/material.dart';
import 'l10n/app_localizations.dart';
import 'api_service.dart';

class MaintenanceScreen extends StatefulWidget {
  const MaintenanceScreen({super.key});

  @override
  State<MaintenanceScreen> createState() => _MaintenanceScreenState();
}

class _MaintenanceScreenState extends State<MaintenanceScreen> {
  final _descController = TextEditingController();
  String? result;
  bool loading = false;

  Future<void> addMaintenance() async {
    setState(() {
      loading = true;
      result = null;
    });
    try {
      final Map<String, dynamic> maintenanceData = {
        'description': _descController.text,
        'timestamp': DateTime.now().toIso8601String(),
      };
      final res = await ApiService.addMaintenance(maintenanceData);
      setState(() {
        result =
            '${AppLocalizations.of(context)!.success}: ${res['message'] ?? AppLocalizations.of(context)!.maintenanceAdded}';
      });
    } catch (e) {
      setState(() {
        result = '${AppLocalizations.of(context)!.error}: $e';
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
      appBar: AppBar(title: const Text('Bakım Kaydı Ekle')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            TextField(
              controller: _descController,
              decoration: const InputDecoration(labelText: 'Bakım Açıklaması'),
              minLines: 2,
              maxLines: 5,
            ),
            const SizedBox(height: 16),
            ElevatedButton(
              onPressed: loading ? null : addMaintenance,
              child: loading
                  ? const CircularProgressIndicator()
                  : const Text('Bakım Kaydı Ekle'),
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
