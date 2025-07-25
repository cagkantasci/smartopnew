import 'package:flutter/material.dart';
import 'api_service.dart';

class EquipmentListScreen extends StatefulWidget {
  const EquipmentListScreen({super.key});

  @override
  State<EquipmentListScreen> createState() => _EquipmentListScreenState();
}

class _EquipmentListScreenState extends State<EquipmentListScreen> {
  late Future<List<dynamic>> equipments;

  @override
  void initState() {
    super.initState();
    equipments = ApiService.getEquipments();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Makine Listesi')),
      body: FutureBuilder<List<dynamic>>(
        future: equipments,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          } else if (snapshot.hasError) {
            return Center(child: Text('Hata: \\${snapshot.error}'));
          } else if (!snapshot.hasData || snapshot.data!.isEmpty) {
            return const Center(child: Text('Makine bulunamadı'));
          }
          return ListView.builder(
            itemCount: snapshot.data!.length,
            itemBuilder: (context, index) {
              final equipment = snapshot.data![index];
              return ListTile(
                title: Text(equipment['name'] ?? 'Makine'),
                subtitle: Text('Plaka: \\${equipment['plate'] ?? '-'}'),
              );
            },
          );
        },
      ),
    );
  }
}
