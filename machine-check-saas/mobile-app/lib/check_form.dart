import 'package:flutter/material.dart';

class CheckFormScreen extends StatelessWidget {
  const CheckFormScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Kontrol Formu')),
      body: Center(
          child: Text('Makine kontrol formu ve fotoğraf yükleme ekranı')),
    );
  }
}
