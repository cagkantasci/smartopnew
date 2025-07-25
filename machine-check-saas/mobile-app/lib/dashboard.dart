import 'package:flutter/material.dart';
import 'api_service.dart';

class DashboardScreen extends StatelessWidget {
  const DashboardScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Operatör Paneli')),
      body: FutureBuilder<List<dynamic>>(
        future: ApiService.getEquipments(),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          } else if (snapshot.hasError) {
            return Center(child: Text('Makine verisi alınamadı: ${snapshot.error}', style: TextStyle(color: Colors.red)));
          } else if (!snapshot.hasData || snapshot.data!.isEmpty) {
            return const Center(child: Text('Hiç makine bulunamadı.'));
          } else {
            final equipments = snapshot.data!;
            return ListView.builder(
              itemCount: equipments.length,
              itemBuilder: (context, index) {
                final equipment = equipments[index];
                return Card(
                  child: ListTile(
                    title: Text(equipment['name'] ?? 'İsimsiz Makine'),
                    subtitle: Text('ID: ${equipment['id'] ?? '-'}'),
                  ),
                );
              },
            );
          }
        },
      ),
    );
  }
}
