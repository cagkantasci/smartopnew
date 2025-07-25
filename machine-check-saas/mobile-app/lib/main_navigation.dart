import 'package:flutter/material.dart';
import 'dashboard.dart';
import 'check_form.dart';
import 'notification.dart';

class MainNavigation extends StatefulWidget {
  const MainNavigation({super.key});

  @override
  State<MainNavigation> createState() => _MainNavigationState();
}

class _MainNavigationState extends State<MainNavigation> {
  int _selectedIndex = 0;
  final List<Widget> _screens = [
    const DashboardScreen(),
    const CheckFormScreen(),
    const NotificationScreen(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _screens[_selectedIndex],
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _selectedIndex,
        onTap: (index) => setState(() => _selectedIndex = index),
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Panel'),
          BottomNavigationBarItem(icon: Icon(Icons.check), label: 'Kontrol'),
          BottomNavigationBarItem(icon: Icon(Icons.notifications), label: 'Bildirim'),
        ],
      ),
    );
  }
}
