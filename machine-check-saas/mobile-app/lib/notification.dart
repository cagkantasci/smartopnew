import 'package:flutter/material.dart';
import 'l10n/app_localizations.dart';
import 'api_service.dart';

class NotificationScreen extends StatefulWidget {
  const NotificationScreen({super.key});

  @override
  State<NotificationScreen> createState() => _NotificationScreenState();
}

class _NotificationScreenState extends State<NotificationScreen> {
  final _tokenController = TextEditingController();
  final _titleController = TextEditingController();
  final _bodyController = TextEditingController();
  String? result;
  bool loading = false;

  Future<void> sendNotification() async {
    setState(() {
      loading = true;
      result = null;
    });
    try {
      final res = await ApiService.sendNotification(
        _tokenController.text,
        _titleController.text,
        _bodyController.text,
      );
      setState(() {
        result =
            '${AppLocalizations.of(context)!.success}: ${res['message'] ?? AppLocalizations.of(context)!.notificationSent}';
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
      appBar: AppBar(title: const Text('Bildirim Gönder')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            TextField(
              controller: _tokenController,
              decoration: const InputDecoration(labelText: 'Kullanıcı Token'),
            ),
            TextField(
              controller: _titleController,
              decoration: const InputDecoration(labelText: 'Başlık'),
            ),
            TextField(
              controller: _bodyController,
              decoration: const InputDecoration(labelText: 'Mesaj'),
            ),
            const SizedBox(height: 16),
            ElevatedButton(
              onPressed: loading ? null : sendNotification,
              child: loading
                  ? const CircularProgressIndicator()
                  : const Text('Bildirim Gönder'),
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
