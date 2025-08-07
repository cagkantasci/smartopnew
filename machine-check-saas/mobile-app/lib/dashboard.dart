import 'package:flutter/material.dart';
import 'l10n/app_localizations.dart';
import 'api_service.dart';

class DashboardScreen extends StatelessWidget {
  const DashboardScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(AppLocalizations.of(context)!.dashboardTitle)),
      body: FutureBuilder<List<dynamic>>(
        future: ApiService.getEquipments(),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          } else if (snapshot.hasError) {
            return Center(
              child: Text(
                '${AppLocalizations.of(context)!.errorGettingData}: ${snapshot.error}',
                style: const TextStyle(color: Colors.red),
              ),
            );
          } else if (!snapshot.hasData || snapshot.data!.isEmpty) {
            return Center(
                child: Text(AppLocalizations.of(context)!.noEquipmentFound));
          } else {
            final equipments = snapshot.data!;
            return ListView.builder(
              itemCount: equipments.length,
              itemBuilder: (context, index) {
                final equipment = equipments[index];
                return Card(
                  child: ListTile(
                    title: Text(equipment['name'] ??
                        AppLocalizations.of(context)!.unnamedEquipment),
                    subtitle: Text(
                        '${AppLocalizations.of(context)!.equipmentId}: ${equipment['id'] ?? '-'}'),
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
