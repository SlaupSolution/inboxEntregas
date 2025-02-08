import 'package:flutter/material.dart';
import '../models/entrega.dart';
import '../services/entrega_service.dart';

class DetalhesEntregaPage extends StatefulWidget {
  final Entrega entrega;

  const DetalhesEntregaPage({super.key, required this.entrega});

  @override
  State<DetalhesEntregaPage> createState() => _DetalhesEntregaPageState();
}

class _DetalhesEntregaPageState extends State<DetalhesEntregaPage> {
  final EntregaService _entregaService = EntregaService();

  Future<void> _atualizarStatus(String novoStatus) async {
    try {
      await _entregaService.atualizarStatus(widget.entrega.id!, novoStatus);
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Status atualizado com sucesso!')),
        );
        Navigator.pop(context);
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Erro ao atualizar status: $e')),
        );
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Detalhes da Entrega'),
        backgroundColor: Colors.orange,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            _buildInfoCard(
              'Informações do Cliente',
              [
                _buildInfoRow('Nome', widget.entrega.nomeCliente),
                _buildInfoRow('Telefone', widget.entrega.telefone),
              ],
            ),
            const SizedBox(height: 16),
            _buildInfoCard(
              'Informações da Entrega',
              [
                _buildInfoRow('Endereço', widget.entrega.endereco),
                _buildInfoRow('Descrição', widget.entrega.descricao),
                _buildInfoRow('Status', widget.entrega.status),
                _buildInfoRow(
                  'Data',
                  widget.entrega.dataCriacao.toString().split('.')[0],
                ),
              ],
            ),
            const SizedBox(height: 24),
            const Text(
              'Atualizar Status:',
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 8),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                _buildStatusButton('Pendente', Colors.orange),
                _buildStatusButton('Em Andamento', Colors.blue),
                _buildStatusButton('Entregue', Colors.green),
              ],
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildInfoCard(String titulo, List<Widget> children) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              titulo,
              style: const TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 16),
            ...children,
          ],
        ),
      ),
    );
  }

  Widget _buildInfoRow(String label, String value) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 8),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          SizedBox(
            width: 100,
            child: Text(
              '$label:',
              style: const TextStyle(fontWeight: FontWeight.w500),
            ),
          ),
          Expanded(
            child: Text(value),
          ),
        ],
      ),
    );
  }

  Widget _buildStatusButton(String status, Color cor) {
    return ElevatedButton(
      onPressed: () => _atualizarStatus(status.toLowerCase()),
      style: ElevatedButton.styleFrom(
        backgroundColor: cor,
        foregroundColor: Colors.white,
      ),
      child: Text(status),
    );
  }
} 