import 'package:flutter/material.dart';
import '../models/entrega.dart';
import '../services/entrega_service.dart';
import 'detalhes_entrega_page.dart';

class ListaEntregasPage extends StatefulWidget {
  const ListaEntregasPage({super.key});

  @override
  State<ListaEntregasPage> createState() => _ListaEntregasPageState();
}

class _ListaEntregasPageState extends State<ListaEntregasPage> {
  final EntregaService _entregaService = EntregaService();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Entregas'),
        backgroundColor: Colors.orange,
      ),
      body: FutureBuilder<List<Entrega>>(
        future: _entregaService.listarEntregas(),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          }

          if (snapshot.hasError) {
            return Center(child: Text('Erro: ${snapshot.error}'));
          }

          final entregas = snapshot.data ?? [];

          if (entregas.isEmpty) {
            return const Center(
              child: Text('Nenhuma entrega cadastrada'),
            );
          }

          return ListView.builder(
            itemCount: entregas.length,
            itemBuilder: (context, index) {
              final entrega = entregas[index];
              return Card(
                margin: const EdgeInsets.symmetric(
                  horizontal: 16,
                  vertical: 8,
                ),
                child: ListTile(
                  title: Text(entrega.nomeCliente),
                  subtitle: Text(entrega.endereco),
                  trailing: _buildStatusChip(entrega.status),
                  onTap: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) => DetalhesEntregaPage(entrega: entrega),
                      ),
                    );
                  },
                ),
              );
            },
          );
        },
      ),
    );
  }

  Widget _buildStatusChip(String status) {
    Color cor;
    switch (status.toLowerCase()) {
      case 'pendente':
        cor = Colors.orange;
        break;
      case 'em andamento':
        cor = Colors.blue;
        break;
      case 'entregue':
        cor = Colors.green;
        break;
      default:
        cor = Colors.grey;
    }

    return Chip(
      backgroundColor: cor.withOpacity(0.2),
      label: Text(
        status,
        style: TextStyle(color: cor),
      ),
    );
  }
} 