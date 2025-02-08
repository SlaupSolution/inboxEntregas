import 'package:flutter/material.dart';
import '../models/entrega.dart';
import '../services/entrega_service.dart';

class CadastrarEntregaPage extends StatefulWidget {
  const CadastrarEntregaPage({super.key});

  @override
  State<CadastrarEntregaPage> createState() => _CadastrarEntregaPageState();
}

class _CadastrarEntregaPageState extends State<CadastrarEntregaPage> {
  final _formKey = GlobalKey<FormState>();
  final _entregaService = EntregaService();
  
  final _nomeController = TextEditingController();
  final _enderecoController = TextEditingController();
  final _telefoneController = TextEditingController();
  final _descricaoController = TextEditingController();

  Future<void> _cadastrarEntrega() async {
    if (_formKey.currentState!.validate()) {
      final entrega = Entrega(
        nomeCliente: _nomeController.text,
        endereco: _enderecoController.text,
        telefone: _telefoneController.text,
        descricao: _descricaoController.text,
        status: 'pendente',
        dataCriacao: DateTime.now(),
      );

      try {
        await _entregaService.criarEntrega(entrega);
        if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(content: Text('Entrega cadastrada com sucesso!')),
          );
          Navigator.pop(context);
        }
      } catch (e) {
        if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(content: Text('Erro ao cadastrar entrega: $e')),
          );
        }
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Cadastrar Entrega'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: ListView(
            children: [
              TextFormField(
                controller: _nomeController,
                decoration: const InputDecoration(labelText: 'Nome do Cliente'),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Por favor, insira o nome do cliente';
                  }
                  return null;
                },
              ),
              TextFormField(
                controller: _enderecoController,
                decoration: const InputDecoration(labelText: 'Endereço'),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Por favor, insira o endereço';
                  }
                  return null;
                },
              ),
              TextFormField(
                controller: _telefoneController,
                decoration: const InputDecoration(labelText: 'Telefone'),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Por favor, insira o telefone';
                  }
                  return null;
                },
              ),
              TextFormField(
                controller: _descricaoController,
                decoration: const InputDecoration(labelText: 'Descrição'),
                maxLines: 3,
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Por favor, insira a descrição';
                  }
                  return null;
                },
              ),
              const SizedBox(height: 20),
              ElevatedButton(
                onPressed: _cadastrarEntrega,
                child: const Text('Cadastrar Entrega'),
              ),
            ],
          ),
        ),
      ),
    );
  }

  @override
  void dispose() {
    _nomeController.dispose();
    _enderecoController.dispose();
    _telefoneController.dispose();
    _descricaoController.dispose();
    super.dispose();
  }
} 